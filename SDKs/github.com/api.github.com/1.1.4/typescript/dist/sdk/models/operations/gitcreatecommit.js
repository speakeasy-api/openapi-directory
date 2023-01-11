"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitCreateCommitResponse = exports.GitCreateCommitRequest = exports.GitCreateCommitRequestBody = exports.GitCreateCommitRequestBodyCommitter = exports.GitCreateCommitRequestBodyAuthor = exports.GitCreateCommitPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GitCreateCommitPathParams = /** @class */ (function (_super) {
    __extends(GitCreateCommitPathParams, _super);
    function GitCreateCommitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitCreateCommitPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitCreateCommitPathParams.prototype, "repo", void 0);
    return GitCreateCommitPathParams;
}(utils_1.SpeakeasyBase));
exports.GitCreateCommitPathParams = GitCreateCommitPathParams;
// GitCreateCommitRequestBodyAuthor
/**
 * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
**/
var GitCreateCommitRequestBodyAuthor = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequestBodyAuthor, _super);
    function GitCreateCommitRequestBodyAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyAuthor.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyAuthor.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyAuthor.prototype, "name", void 0);
    return GitCreateCommitRequestBodyAuthor;
}(utils_1.SpeakeasyBase));
exports.GitCreateCommitRequestBodyAuthor = GitCreateCommitRequestBodyAuthor;
// GitCreateCommitRequestBodyCommitter
/**
 * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
**/
var GitCreateCommitRequestBodyCommitter = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequestBodyCommitter, _super);
    function GitCreateCommitRequestBodyCommitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyCommitter.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyCommitter.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBodyCommitter.prototype, "name", void 0);
    return GitCreateCommitRequestBodyCommitter;
}(utils_1.SpeakeasyBase));
exports.GitCreateCommitRequestBodyCommitter = GitCreateCommitRequestBodyCommitter;
var GitCreateCommitRequestBody = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequestBody, _super);
    function GitCreateCommitRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", GitCreateCommitRequestBodyAuthor)
    ], GitCreateCommitRequestBody.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=committer" }),
        __metadata("design:type", GitCreateCommitRequestBodyCommitter)
    ], GitCreateCommitRequestBody.prototype, "committer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBody.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parents" }),
        __metadata("design:type", Array)
    ], GitCreateCommitRequestBody.prototype, "parents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=signature" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBody.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tree" }),
        __metadata("design:type", String)
    ], GitCreateCommitRequestBody.prototype, "tree", void 0);
    return GitCreateCommitRequestBody;
}(utils_1.SpeakeasyBase));
exports.GitCreateCommitRequestBody = GitCreateCommitRequestBody;
var GitCreateCommitRequest = /** @class */ (function (_super) {
    __extends(GitCreateCommitRequest, _super);
    function GitCreateCommitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GitCreateCommitPathParams)
    ], GitCreateCommitRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GitCreateCommitRequestBody)
    ], GitCreateCommitRequest.prototype, "request", void 0);
    return GitCreateCommitRequest;
}(utils_1.SpeakeasyBase));
exports.GitCreateCommitRequest = GitCreateCommitRequest;
var GitCreateCommitResponse = /** @class */ (function (_super) {
    __extends(GitCreateCommitResponse, _super);
    function GitCreateCommitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GitCreateCommitResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GitCreateCommitResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GitCreateCommitResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], GitCreateCommitResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GitCommit)
    ], GitCreateCommitResponse.prototype, "gitCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], GitCreateCommitResponse.prototype, "validationError", void 0);
    return GitCreateCommitResponse;
}(utils_1.SpeakeasyBase));
exports.GitCreateCommitResponse = GitCreateCommitResponse;

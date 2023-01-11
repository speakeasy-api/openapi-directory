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
exports.ReposDeleteFileResponse = exports.ReposDeleteFileRequest = exports.ReposDeleteFile503ApplicationJson = exports.ReposDeleteFileRequestBody = exports.ReposDeleteFileRequestBodyCommitter = exports.ReposDeleteFileRequestBodyAuthor = exports.ReposDeleteFilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposDeleteFilePathParams = /** @class */ (function (_super) {
    __extends(ReposDeleteFilePathParams, _super);
    function ReposDeleteFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposDeleteFilePathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], ReposDeleteFilePathParams.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposDeleteFilePathParams.prototype, "repo", void 0);
    return ReposDeleteFilePathParams;
}(utils_1.SpeakeasyBase));
exports.ReposDeleteFilePathParams = ReposDeleteFilePathParams;
// ReposDeleteFileRequestBodyAuthor
/**
 * object containing information about the author.
**/
var ReposDeleteFileRequestBodyAuthor = /** @class */ (function (_super) {
    __extends(ReposDeleteFileRequestBodyAuthor, _super);
    function ReposDeleteFileRequestBodyAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReposDeleteFileRequestBodyAuthor.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposDeleteFileRequestBodyAuthor.prototype, "name", void 0);
    return ReposDeleteFileRequestBodyAuthor;
}(utils_1.SpeakeasyBase));
exports.ReposDeleteFileRequestBodyAuthor = ReposDeleteFileRequestBodyAuthor;
// ReposDeleteFileRequestBodyCommitter
/**
 * object containing information about the committer.
**/
var ReposDeleteFileRequestBodyCommitter = /** @class */ (function (_super) {
    __extends(ReposDeleteFileRequestBodyCommitter, _super);
    function ReposDeleteFileRequestBodyCommitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ReposDeleteFileRequestBodyCommitter.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposDeleteFileRequestBodyCommitter.prototype, "name", void 0);
    return ReposDeleteFileRequestBodyCommitter;
}(utils_1.SpeakeasyBase));
exports.ReposDeleteFileRequestBodyCommitter = ReposDeleteFileRequestBodyCommitter;
var ReposDeleteFileRequestBody = /** @class */ (function (_super) {
    __extends(ReposDeleteFileRequestBody, _super);
    function ReposDeleteFileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", ReposDeleteFileRequestBodyAuthor)
    ], ReposDeleteFileRequestBody.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ReposDeleteFileRequestBody.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=committer" }),
        __metadata("design:type", ReposDeleteFileRequestBodyCommitter)
    ], ReposDeleteFileRequestBody.prototype, "committer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposDeleteFileRequestBody.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], ReposDeleteFileRequestBody.prototype, "sha", void 0);
    return ReposDeleteFileRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposDeleteFileRequestBody = ReposDeleteFileRequestBody;
var ReposDeleteFile503ApplicationJson = /** @class */ (function (_super) {
    __extends(ReposDeleteFile503ApplicationJson, _super);
    function ReposDeleteFile503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ReposDeleteFile503ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ReposDeleteFile503ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ReposDeleteFile503ApplicationJson.prototype, "message", void 0);
    return ReposDeleteFile503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ReposDeleteFile503ApplicationJson = ReposDeleteFile503ApplicationJson;
var ReposDeleteFileRequest = /** @class */ (function (_super) {
    __extends(ReposDeleteFileRequest, _super);
    function ReposDeleteFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposDeleteFilePathParams)
    ], ReposDeleteFileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposDeleteFileRequestBody)
    ], ReposDeleteFileRequest.prototype, "request", void 0);
    return ReposDeleteFileRequest;
}(utils_1.SpeakeasyBase));
exports.ReposDeleteFileRequest = ReposDeleteFileRequest;
var ReposDeleteFileResponse = /** @class */ (function (_super) {
    __extends(ReposDeleteFileResponse, _super);
    function ReposDeleteFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposDeleteFileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposDeleteFileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], ReposDeleteFileResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.FileCommit)
    ], ReposDeleteFileResponse.prototype, "fileCommit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposDeleteFile503ApplicationJson)
    ], ReposDeleteFileResponse.prototype, "reposDeleteFile503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposDeleteFileResponse.prototype, "validationError", void 0);
    return ReposDeleteFileResponse;
}(utils_1.SpeakeasyBase));
exports.ReposDeleteFileResponse = ReposDeleteFileResponse;

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
exports.GitCreateTreeResponse = exports.GitCreateTreeRequest = exports.GitCreateTreeRequestBody = exports.GitCreateTreeRequestBodyTree = exports.GitCreateTreeRequestBodyTreeTypeEnum = exports.GitCreateTreeRequestBodyTreeModeEnum = exports.GitCreateTreePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GitCreateTreePathParams = /** @class */ (function (_super) {
    __extends(GitCreateTreePathParams, _super);
    function GitCreateTreePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], GitCreateTreePathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], GitCreateTreePathParams.prototype, "repo", void 0);
    return GitCreateTreePathParams;
}(utils_1.SpeakeasyBase));
exports.GitCreateTreePathParams = GitCreateTreePathParams;
var GitCreateTreeRequestBodyTreeModeEnum;
(function (GitCreateTreeRequestBodyTreeModeEnum) {
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredThousandSixHundredAndFortyFour"] = "100644";
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredThousandSevenHundredAndFiftyFive"] = "100755";
    GitCreateTreeRequestBodyTreeModeEnum["FortyThousand"] = "040000";
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredAndSixtyThousand"] = "160000";
    GitCreateTreeRequestBodyTreeModeEnum["OneHundredAndTwentyThousand"] = "120000";
})(GitCreateTreeRequestBodyTreeModeEnum = exports.GitCreateTreeRequestBodyTreeModeEnum || (exports.GitCreateTreeRequestBodyTreeModeEnum = {}));
var GitCreateTreeRequestBodyTreeTypeEnum;
(function (GitCreateTreeRequestBodyTreeTypeEnum) {
    GitCreateTreeRequestBodyTreeTypeEnum["Blob"] = "blob";
    GitCreateTreeRequestBodyTreeTypeEnum["Tree"] = "tree";
    GitCreateTreeRequestBodyTreeTypeEnum["Commit"] = "commit";
})(GitCreateTreeRequestBodyTreeTypeEnum = exports.GitCreateTreeRequestBodyTreeTypeEnum || (exports.GitCreateTreeRequestBodyTreeTypeEnum = {}));
var GitCreateTreeRequestBodyTree = /** @class */ (function (_super) {
    __extends(GitCreateTreeRequestBodyTree, _super);
    function GitCreateTreeRequestBodyTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sha" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBodyTree.prototype, "type", void 0);
    return GitCreateTreeRequestBodyTree;
}(utils_1.SpeakeasyBase));
exports.GitCreateTreeRequestBodyTree = GitCreateTreeRequestBodyTree;
var GitCreateTreeRequestBody = /** @class */ (function (_super) {
    __extends(GitCreateTreeRequestBody, _super);
    function GitCreateTreeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=base_tree" }),
        __metadata("design:type", String)
    ], GitCreateTreeRequestBody.prototype, "baseTree", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tree", elemType: GitCreateTreeRequestBodyTree }),
        __metadata("design:type", Array)
    ], GitCreateTreeRequestBody.prototype, "tree", void 0);
    return GitCreateTreeRequestBody;
}(utils_1.SpeakeasyBase));
exports.GitCreateTreeRequestBody = GitCreateTreeRequestBody;
var GitCreateTreeRequest = /** @class */ (function (_super) {
    __extends(GitCreateTreeRequest, _super);
    function GitCreateTreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GitCreateTreePathParams)
    ], GitCreateTreeRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GitCreateTreeRequestBody)
    ], GitCreateTreeRequest.prototype, "request", void 0);
    return GitCreateTreeRequest;
}(utils_1.SpeakeasyBase));
exports.GitCreateTreeRequest = GitCreateTreeRequest;
var GitCreateTreeResponse = /** @class */ (function (_super) {
    __extends(GitCreateTreeResponse, _super);
    function GitCreateTreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GitCreateTreeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GitCreateTreeResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GitCreateTreeResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], GitCreateTreeResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GitTree)
    ], GitCreateTreeResponse.prototype, "gitTree", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], GitCreateTreeResponse.prototype, "validationError", void 0);
    return GitCreateTreeResponse;
}(utils_1.SpeakeasyBase));
exports.GitCreateTreeResponse = GitCreateTreeResponse;

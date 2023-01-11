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
exports.DeleteGitHubAccountTokenResponse = exports.DeleteGitHubAccountTokenRequest = exports.DeleteGitHubAccountTokenHeaders = exports.DeleteGitHubAccountTokenXAmzTargetEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteGitHubAccountTokenXAmzTargetEnum;
(function (DeleteGitHubAccountTokenXAmzTargetEnum) {
    DeleteGitHubAccountTokenXAmzTargetEnum["CodeDeploy20141006DeleteGitHubAccountToken"] = "CodeDeploy_20141006.DeleteGitHubAccountToken";
})(DeleteGitHubAccountTokenXAmzTargetEnum = exports.DeleteGitHubAccountTokenXAmzTargetEnum || (exports.DeleteGitHubAccountTokenXAmzTargetEnum = {}));
var DeleteGitHubAccountTokenHeaders = /** @class */ (function (_super) {
    __extends(DeleteGitHubAccountTokenHeaders, _super);
    function DeleteGitHubAccountTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenHeaders.prototype, "xAmzTarget", void 0);
    return DeleteGitHubAccountTokenHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteGitHubAccountTokenHeaders = DeleteGitHubAccountTokenHeaders;
var DeleteGitHubAccountTokenRequest = /** @class */ (function (_super) {
    __extends(DeleteGitHubAccountTokenRequest, _super);
    function DeleteGitHubAccountTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteGitHubAccountTokenHeaders)
    ], DeleteGitHubAccountTokenRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DeleteGitHubAccountTokenInput)
    ], DeleteGitHubAccountTokenRequest.prototype, "request", void 0);
    return DeleteGitHubAccountTokenRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteGitHubAccountTokenRequest = DeleteGitHubAccountTokenRequest;
var DeleteGitHubAccountTokenResponse = /** @class */ (function (_super) {
    __extends(DeleteGitHubAccountTokenResponse, _super);
    function DeleteGitHubAccountTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteGitHubAccountTokenResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeleteGitHubAccountTokenOutput)
    ], DeleteGitHubAccountTokenResponse.prototype, "deleteGitHubAccountTokenOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "gitHubAccountTokenDoesNotExistException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "gitHubAccountTokenNameRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "invalidGitHubAccountTokenNameException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "operationNotSupportedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteGitHubAccountTokenResponse.prototype, "resourceValidationException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteGitHubAccountTokenResponse.prototype, "statusCode", void 0);
    return DeleteGitHubAccountTokenResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteGitHubAccountTokenResponse = DeleteGitHubAccountTokenResponse;

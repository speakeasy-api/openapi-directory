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
exports.BatchAssociateApprovalRuleTemplateWithRepositoriesResponse = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum;
(function (BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum) {
    BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum["CodeCommit20150413BatchAssociateApprovalRuleTemplateWithRepositories"] = "CodeCommit_20150413.BatchAssociateApprovalRuleTemplateWithRepositories";
})(BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum = exports.BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum || (exports.BatchAssociateApprovalRuleTemplateWithRepositoriesXAmzTargetEnum = {}));
var BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders = /** @class */ (function (_super) {
    __extends(BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders, _super);
    function BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders.prototype, "xAmzTarget", void 0);
    return BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders;
}(utils_1.SpeakeasyBase));
exports.BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders = BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders;
var BatchAssociateApprovalRuleTemplateWithRepositoriesRequest = /** @class */ (function (_super) {
    __extends(BatchAssociateApprovalRuleTemplateWithRepositoriesRequest, _super);
    function BatchAssociateApprovalRuleTemplateWithRepositoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", BatchAssociateApprovalRuleTemplateWithRepositoriesHeaders)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchAssociateApprovalRuleTemplateWithRepositoriesInput)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesRequest.prototype, "request", void 0);
    return BatchAssociateApprovalRuleTemplateWithRepositoriesRequest;
}(utils_1.SpeakeasyBase));
exports.BatchAssociateApprovalRuleTemplateWithRepositoriesRequest = BatchAssociateApprovalRuleTemplateWithRepositoriesRequest;
var BatchAssociateApprovalRuleTemplateWithRepositoriesResponse = /** @class */ (function (_super) {
    __extends(BatchAssociateApprovalRuleTemplateWithRepositoriesResponse, _super);
    function BatchAssociateApprovalRuleTemplateWithRepositoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "approvalRuleTemplateDoesNotExistException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "approvalRuleTemplateNameRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BatchAssociateApprovalRuleTemplateWithRepositoriesOutput)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "batchAssociateApprovalRuleTemplateWithRepositoriesOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "invalidApprovalRuleTemplateNameException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "maximumRepositoryNamesExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "repositoryNamesRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], BatchAssociateApprovalRuleTemplateWithRepositoriesResponse.prototype, "statusCode", void 0);
    return BatchAssociateApprovalRuleTemplateWithRepositoriesResponse;
}(utils_1.SpeakeasyBase));
exports.BatchAssociateApprovalRuleTemplateWithRepositoriesResponse = BatchAssociateApprovalRuleTemplateWithRepositoriesResponse;

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
exports.ListRepositoriesForApprovalRuleTemplateResponse = exports.ListRepositoriesForApprovalRuleTemplateRequest = exports.ListRepositoriesForApprovalRuleTemplateHeaders = exports.ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum = exports.ListRepositoriesForApprovalRuleTemplateQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListRepositoriesForApprovalRuleTemplateQueryParams = /** @class */ (function (_super) {
    __extends(ListRepositoriesForApprovalRuleTemplateQueryParams, _super);
    function ListRepositoriesForApprovalRuleTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateQueryParams.prototype, "nextToken", void 0);
    return ListRepositoriesForApprovalRuleTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListRepositoriesForApprovalRuleTemplateQueryParams = ListRepositoriesForApprovalRuleTemplateQueryParams;
var ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum;
(function (ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum) {
    ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum["CodeCommit20150413ListRepositoriesForApprovalRuleTemplate"] = "CodeCommit_20150413.ListRepositoriesForApprovalRuleTemplate";
})(ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum = exports.ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum || (exports.ListRepositoriesForApprovalRuleTemplateXAmzTargetEnum = {}));
var ListRepositoriesForApprovalRuleTemplateHeaders = /** @class */ (function (_super) {
    __extends(ListRepositoriesForApprovalRuleTemplateHeaders, _super);
    function ListRepositoriesForApprovalRuleTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateHeaders.prototype, "xAmzTarget", void 0);
    return ListRepositoriesForApprovalRuleTemplateHeaders;
}(utils_1.SpeakeasyBase));
exports.ListRepositoriesForApprovalRuleTemplateHeaders = ListRepositoriesForApprovalRuleTemplateHeaders;
var ListRepositoriesForApprovalRuleTemplateRequest = /** @class */ (function (_super) {
    __extends(ListRepositoriesForApprovalRuleTemplateRequest, _super);
    function ListRepositoriesForApprovalRuleTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRepositoriesForApprovalRuleTemplateQueryParams)
    ], ListRepositoriesForApprovalRuleTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRepositoriesForApprovalRuleTemplateHeaders)
    ], ListRepositoriesForApprovalRuleTemplateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListRepositoriesForApprovalRuleTemplateInput)
    ], ListRepositoriesForApprovalRuleTemplateRequest.prototype, "request", void 0);
    return ListRepositoriesForApprovalRuleTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.ListRepositoriesForApprovalRuleTemplateRequest = ListRepositoriesForApprovalRuleTemplateRequest;
var ListRepositoriesForApprovalRuleTemplateResponse = /** @class */ (function (_super) {
    __extends(ListRepositoriesForApprovalRuleTemplateResponse, _super);
    function ListRepositoriesForApprovalRuleTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "approvalRuleTemplateDoesNotExistException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "approvalRuleTemplateNameRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "invalidApprovalRuleTemplateNameException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "invalidContinuationTokenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "invalidMaxResultsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListRepositoriesForApprovalRuleTemplateOutput)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "listRepositoriesForApprovalRuleTemplateOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListRepositoriesForApprovalRuleTemplateResponse.prototype, "statusCode", void 0);
    return ListRepositoriesForApprovalRuleTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.ListRepositoriesForApprovalRuleTemplateResponse = ListRepositoriesForApprovalRuleTemplateResponse;

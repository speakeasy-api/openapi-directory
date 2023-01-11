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
exports.MergePullRequestBySquashResponse = exports.MergePullRequestBySquashRequest = exports.MergePullRequestBySquashHeaders = exports.MergePullRequestBySquashXAmzTargetEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var MergePullRequestBySquashXAmzTargetEnum;
(function (MergePullRequestBySquashXAmzTargetEnum) {
    MergePullRequestBySquashXAmzTargetEnum["CodeCommit20150413MergePullRequestBySquash"] = "CodeCommit_20150413.MergePullRequestBySquash";
})(MergePullRequestBySquashXAmzTargetEnum = exports.MergePullRequestBySquashXAmzTargetEnum || (exports.MergePullRequestBySquashXAmzTargetEnum = {}));
var MergePullRequestBySquashHeaders = /** @class */ (function (_super) {
    __extends(MergePullRequestBySquashHeaders, _super);
    function MergePullRequestBySquashHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], MergePullRequestBySquashHeaders.prototype, "xAmzTarget", void 0);
    return MergePullRequestBySquashHeaders;
}(utils_1.SpeakeasyBase));
exports.MergePullRequestBySquashHeaders = MergePullRequestBySquashHeaders;
var MergePullRequestBySquashRequest = /** @class */ (function (_super) {
    __extends(MergePullRequestBySquashRequest, _super);
    function MergePullRequestBySquashRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", MergePullRequestBySquashHeaders)
    ], MergePullRequestBySquashRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MergePullRequestBySquashInput)
    ], MergePullRequestBySquashRequest.prototype, "request", void 0);
    return MergePullRequestBySquashRequest;
}(utils_1.SpeakeasyBase));
exports.MergePullRequestBySquashRequest = MergePullRequestBySquashRequest;
var MergePullRequestBySquashResponse = /** @class */ (function (_super) {
    __extends(MergePullRequestBySquashResponse, _super);
    function MergePullRequestBySquashResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "commitMessageLengthExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "concurrentReferenceUpdateException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], MergePullRequestBySquashResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "encryptionIntegrityChecksFailedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "encryptionKeyAccessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "encryptionKeyDisabledException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "encryptionKeyNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "encryptionKeyUnavailableException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "fileContentSizeLimitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "folderContentSizeLimitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidCommitIdException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidConflictDetailLevelException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidConflictResolutionException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidConflictResolutionStrategyException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidEmailException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidFileModeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidPathException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidPullRequestIdException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidReplacementContentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidReplacementTypeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "invalidRepositoryNameException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "manualMergeRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "maximumConflictResolutionEntriesExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "maximumFileContentToLoadExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "maximumItemsToCompareExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.MergePullRequestBySquashOutput)
    ], MergePullRequestBySquashResponse.prototype, "mergePullRequestBySquashOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "multipleConflictResolutionEntriesException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "nameLengthExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "pathRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "pullRequestAlreadyClosedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "pullRequestApprovalRulesNotSatisfiedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "pullRequestDoesNotExistException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "pullRequestIdRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "replacementContentRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "replacementTypeRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "repositoryDoesNotExistException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "repositoryNameRequiredException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "repositoryNotAssociatedWithPullRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], MergePullRequestBySquashResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "tipOfSourceReferenceIsDifferentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], MergePullRequestBySquashResponse.prototype, "tipsDivergenceExceededException", void 0);
    return MergePullRequestBySquashResponse;
}(utils_1.SpeakeasyBase));
exports.MergePullRequestBySquashResponse = MergePullRequestBySquashResponse;

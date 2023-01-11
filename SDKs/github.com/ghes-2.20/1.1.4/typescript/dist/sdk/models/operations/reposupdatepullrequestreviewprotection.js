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
exports.ReposUpdatePullRequestReviewProtectionResponse = exports.ReposUpdatePullRequestReviewProtectionRequest = exports.ReposUpdatePullRequestReviewProtectionRequestBody = exports.ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions = exports.ReposUpdatePullRequestReviewProtectionPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ReposUpdatePullRequestReviewProtectionPathParams = /** @class */ (function (_super) {
    __extends(ReposUpdatePullRequestReviewProtectionPathParams, _super);
    function ReposUpdatePullRequestReviewProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=branch" }),
        __metadata("design:type", String)
    ], ReposUpdatePullRequestReviewProtectionPathParams.prototype, "branch", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdatePullRequestReviewProtectionPathParams.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdatePullRequestReviewProtectionPathParams.prototype, "repo", void 0);
    return ReposUpdatePullRequestReviewProtectionPathParams;
}(utils_1.SpeakeasyBase));
exports.ReposUpdatePullRequestReviewProtectionPathParams = ReposUpdatePullRequestReviewProtectionPathParams;
// ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions
/**
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
var ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions = /** @class */ (function (_super) {
    __extends(ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions, _super);
    function ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=teams" }),
        __metadata("design:type", Array)
    ], ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions.prototype, "teams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users" }),
        __metadata("design:type", Array)
    ], ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions.prototype, "users", void 0);
    return ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;
}(utils_1.SpeakeasyBase));
exports.ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions = ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions;
var ReposUpdatePullRequestReviewProtectionRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdatePullRequestReviewProtectionRequestBody, _super);
    function ReposUpdatePullRequestReviewProtectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dismiss_stale_reviews" }),
        __metadata("design:type", Boolean)
    ], ReposUpdatePullRequestReviewProtectionRequestBody.prototype, "dismissStaleReviews", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dismissal_restrictions" }),
        __metadata("design:type", ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions)
    ], ReposUpdatePullRequestReviewProtectionRequestBody.prototype, "dismissalRestrictions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=require_code_owner_reviews" }),
        __metadata("design:type", Boolean)
    ], ReposUpdatePullRequestReviewProtectionRequestBody.prototype, "requireCodeOwnerReviews", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_approving_review_count" }),
        __metadata("design:type", Number)
    ], ReposUpdatePullRequestReviewProtectionRequestBody.prototype, "requiredApprovingReviewCount", void 0);
    return ReposUpdatePullRequestReviewProtectionRequestBody;
}(utils_1.SpeakeasyBase));
exports.ReposUpdatePullRequestReviewProtectionRequestBody = ReposUpdatePullRequestReviewProtectionRequestBody;
var ReposUpdatePullRequestReviewProtectionRequest = /** @class */ (function (_super) {
    __extends(ReposUpdatePullRequestReviewProtectionRequest, _super);
    function ReposUpdatePullRequestReviewProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReposUpdatePullRequestReviewProtectionPathParams)
    ], ReposUpdatePullRequestReviewProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdatePullRequestReviewProtectionRequestBody)
    ], ReposUpdatePullRequestReviewProtectionRequest.prototype, "request", void 0);
    return ReposUpdatePullRequestReviewProtectionRequest;
}(utils_1.SpeakeasyBase));
exports.ReposUpdatePullRequestReviewProtectionRequest = ReposUpdatePullRequestReviewProtectionRequest;
var ReposUpdatePullRequestReviewProtectionResponse = /** @class */ (function (_super) {
    __extends(ReposUpdatePullRequestReviewProtectionResponse, _super);
    function ReposUpdatePullRequestReviewProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReposUpdatePullRequestReviewProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReposUpdatePullRequestReviewProtectionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ProtectedBranchPullRequestReview)
    ], ReposUpdatePullRequestReviewProtectionResponse.prototype, "protectedBranchPullRequestReview", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], ReposUpdatePullRequestReviewProtectionResponse.prototype, "validationError", void 0);
    return ReposUpdatePullRequestReviewProtectionResponse;
}(utils_1.SpeakeasyBase));
exports.ReposUpdatePullRequestReviewProtectionResponse = ReposUpdatePullRequestReviewProtectionResponse;

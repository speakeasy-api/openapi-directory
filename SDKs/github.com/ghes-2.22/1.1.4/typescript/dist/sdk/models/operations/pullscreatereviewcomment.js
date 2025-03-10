"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PullsCreateReviewCommentResponse = exports.PullsCreateReviewCommentRequest = exports.PullsCreateReviewCommentRequestBody = exports.PullsCreateReviewCommentRequestBodyStartSideEnum = exports.PullsCreateReviewCommentRequestBodySideEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.
 */
var PullsCreateReviewCommentRequestBodySideEnum;
(function (PullsCreateReviewCommentRequestBodySideEnum) {
    PullsCreateReviewCommentRequestBodySideEnum["Left"] = "LEFT";
    PullsCreateReviewCommentRequestBodySideEnum["Right"] = "RIGHT";
})(PullsCreateReviewCommentRequestBodySideEnum = exports.PullsCreateReviewCommentRequestBodySideEnum || (exports.PullsCreateReviewCommentRequestBodySideEnum = {}));
/**
 * **Required when using multi-line comments**. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See `side` in this table for additional context.
 */
var PullsCreateReviewCommentRequestBodyStartSideEnum;
(function (PullsCreateReviewCommentRequestBodyStartSideEnum) {
    PullsCreateReviewCommentRequestBodyStartSideEnum["Left"] = "LEFT";
    PullsCreateReviewCommentRequestBodyStartSideEnum["Right"] = "RIGHT";
    PullsCreateReviewCommentRequestBodyStartSideEnum["Side"] = "side";
})(PullsCreateReviewCommentRequestBodyStartSideEnum = exports.PullsCreateReviewCommentRequestBodyStartSideEnum || (exports.PullsCreateReviewCommentRequestBodyStartSideEnum = {}));
var PullsCreateReviewCommentRequestBody = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentRequestBody, _super);
    function PullsCreateReviewCommentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "body" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "commit_id" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "commitId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "in_reply_to" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "inReplyTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "line" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "line", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "path" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "position" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "position", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "side" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "side", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "start_line" }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequestBody.prototype, "startLine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "start_side" }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequestBody.prototype, "startSide", void 0);
    return PullsCreateReviewCommentRequestBody;
}(utils_1.SpeakeasyBase));
exports.PullsCreateReviewCommentRequestBody = PullsCreateReviewCommentRequestBody;
var PullsCreateReviewCommentRequest = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentRequest, _super);
    function PullsCreateReviewCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PullsCreateReviewCommentRequestBody)
    ], PullsCreateReviewCommentRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=owner",
        }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequest.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=pull_number",
        }),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentRequest.prototype, "pullNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=repo",
        }),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentRequest.prototype, "repo", void 0);
    return PullsCreateReviewCommentRequest;
}(utils_1.SpeakeasyBase));
exports.PullsCreateReviewCommentRequest = PullsCreateReviewCommentRequest;
var PullsCreateReviewCommentResponse = /** @class */ (function (_super) {
    __extends(PullsCreateReviewCommentResponse, _super);
    function PullsCreateReviewCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PullsCreateReviewCommentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PullsCreateReviewCommentResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PullsCreateReviewCommentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PullsCreateReviewCommentResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], PullsCreateReviewCommentResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PullRequestReviewComment)
    ], PullsCreateReviewCommentResponse.prototype, "pullRequestReviewComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ValidationError)
    ], PullsCreateReviewCommentResponse.prototype, "validationError", void 0);
    return PullsCreateReviewCommentResponse;
}(utils_1.SpeakeasyBase));
exports.PullsCreateReviewCommentResponse = PullsCreateReviewCommentResponse;

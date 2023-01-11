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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionsDeleteForTeamDiscussionCommentResponse = exports.ReactionsDeleteForTeamDiscussionCommentRequest = exports.ReactionsDeleteForTeamDiscussionCommentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ReactionsDeleteForTeamDiscussionCommentPathParams = /** @class */ (function (_super) {
    __extends(ReactionsDeleteForTeamDiscussionCommentPathParams, _super);
    function ReactionsDeleteForTeamDiscussionCommentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=comment_number" }),
        __metadata("design:type", Number)
    ], ReactionsDeleteForTeamDiscussionCommentPathParams.prototype, "commentNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=discussion_number" }),
        __metadata("design:type", Number)
    ], ReactionsDeleteForTeamDiscussionCommentPathParams.prototype, "discussionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=org" }),
        __metadata("design:type", String)
    ], ReactionsDeleteForTeamDiscussionCommentPathParams.prototype, "org", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=reaction_id" }),
        __metadata("design:type", Number)
    ], ReactionsDeleteForTeamDiscussionCommentPathParams.prototype, "reactionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_slug" }),
        __metadata("design:type", String)
    ], ReactionsDeleteForTeamDiscussionCommentPathParams.prototype, "teamSlug", void 0);
    return ReactionsDeleteForTeamDiscussionCommentPathParams;
}(utils_1.SpeakeasyBase));
exports.ReactionsDeleteForTeamDiscussionCommentPathParams = ReactionsDeleteForTeamDiscussionCommentPathParams;
var ReactionsDeleteForTeamDiscussionCommentRequest = /** @class */ (function (_super) {
    __extends(ReactionsDeleteForTeamDiscussionCommentRequest, _super);
    function ReactionsDeleteForTeamDiscussionCommentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ReactionsDeleteForTeamDiscussionCommentPathParams)
    ], ReactionsDeleteForTeamDiscussionCommentRequest.prototype, "pathParams", void 0);
    return ReactionsDeleteForTeamDiscussionCommentRequest;
}(utils_1.SpeakeasyBase));
exports.ReactionsDeleteForTeamDiscussionCommentRequest = ReactionsDeleteForTeamDiscussionCommentRequest;
var ReactionsDeleteForTeamDiscussionCommentResponse = /** @class */ (function (_super) {
    __extends(ReactionsDeleteForTeamDiscussionCommentResponse, _super);
    function ReactionsDeleteForTeamDiscussionCommentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReactionsDeleteForTeamDiscussionCommentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReactionsDeleteForTeamDiscussionCommentResponse.prototype, "statusCode", void 0);
    return ReactionsDeleteForTeamDiscussionCommentResponse;
}(utils_1.SpeakeasyBase));
exports.ReactionsDeleteForTeamDiscussionCommentResponse = ReactionsDeleteForTeamDiscussionCommentResponse;

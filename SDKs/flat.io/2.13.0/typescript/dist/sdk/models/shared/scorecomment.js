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
exports.ScoreComment = exports.ScoreCommentTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var scorecommentcontext_1 = require("./scorecommentcontext");
var ScoreCommentTypeEnum;
(function (ScoreCommentTypeEnum) {
    ScoreCommentTypeEnum["Document"] = "document";
    ScoreCommentTypeEnum["Inline"] = "inline";
})(ScoreCommentTypeEnum = exports.ScoreCommentTypeEnum || (exports.ScoreCommentTypeEnum = {}));
// ScoreComment
/**
 * Comment added on a sheet music
**/
var ScoreComment = /** @class */ (function (_super) {
    __extends(ScoreComment, _super);
    function ScoreComment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=context" }),
        __metadata("design:type", scorecommentcontext_1.ScoreCommentContext)
    ], ScoreComment.prototype, "context", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ScoreComment.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mentions" }),
        __metadata("design:type", Array)
    ], ScoreComment.prototype, "mentions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modificationDate" }),
        __metadata("design:type", Date)
    ], ScoreComment.prototype, "modificationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rawComment" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "rawComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=replyTo" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "replyTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolved" }),
        __metadata("design:type", Boolean)
    ], ScoreComment.prototype, "resolved", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolvedBy" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "resolvedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revision" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "revision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=score" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spam" }),
        __metadata("design:type", Boolean)
    ], ScoreComment.prototype, "spam", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], ScoreComment.prototype, "user", void 0);
    return ScoreComment;
}(utils_1.SpeakeasyBase));
exports.ScoreComment = ScoreComment;

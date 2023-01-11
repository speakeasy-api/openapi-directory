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
exports.CurationDetail = exports.CurationDetailStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var articlecomplete_1 = require("./articlecomplete");
var CurationDetailStatusEnum;
(function (CurationDetailStatusEnum) {
    CurationDetailStatusEnum["Pending"] = "pending";
    CurationDetailStatusEnum["Approved"] = "approved";
    CurationDetailStatusEnum["Rejected"] = "rejected";
    CurationDetailStatusEnum["Closed"] = "closed";
})(CurationDetailStatusEnum = exports.CurationDetailStatusEnum || (exports.CurationDetailStatusEnum = {}));
var CurationDetail = /** @class */ (function (_super) {
    __extends(CurationDetail, _super);
    function CurationDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_id" }),
        __metadata("design:type", Number)
    ], CurationDetail.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=article_id" }),
        __metadata("design:type", Number)
    ], CurationDetail.prototype, "articleId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigned_to" }),
        __metadata("design:type", Number)
    ], CurationDetail.prototype, "assignedTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comments_count" }),
        __metadata("design:type", Number)
    ], CurationDetail.prototype, "commentsCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_date" }),
        __metadata("design:type", String)
    ], CurationDetail.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", Number)
    ], CurationDetail.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CurationDetail.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item" }),
        __metadata("design:type", articlecomplete_1.ArticleComplete)
    ], CurationDetail.prototype, "item", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_date" }),
        __metadata("design:type", String)
    ], CurationDetail.prototype, "modifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=review_date" }),
        __metadata("design:type", String)
    ], CurationDetail.prototype, "reviewDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CurationDetail.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], CurationDetail.prototype, "version", void 0);
    return CurationDetail;
}(utils_1.SpeakeasyBase));
exports.CurationDetail = CurationDetail;

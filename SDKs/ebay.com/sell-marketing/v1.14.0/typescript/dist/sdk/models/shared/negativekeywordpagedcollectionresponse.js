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
exports.NegativeKeywordPagedCollectionResponse = void 0;
var utils_1 = require("../../../internal/utils");
var negativekeyword_1 = require("./negativekeyword");
var class_transformer_1 = require("class-transformer");
/**
 * A type that defines the negative keywords, returned in a paged collection.
 */
var NegativeKeywordPagedCollectionResponse = /** @class */ (function (_super) {
    __extends(NegativeKeywordPagedCollectionResponse, _super);
    function NegativeKeywordPagedCollectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "href" }),
        __metadata("design:type", String)
    ], NegativeKeywordPagedCollectionResponse.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "limit" }),
        __metadata("design:type", Number)
    ], NegativeKeywordPagedCollectionResponse.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: negativekeyword_1.NegativeKeyword }),
        (0, class_transformer_1.Expose)({ name: "negativeKeywords" }),
        (0, class_transformer_1.Type)(function () { return negativekeyword_1.NegativeKeyword; }),
        __metadata("design:type", Array)
    ], NegativeKeywordPagedCollectionResponse.prototype, "negativeKeywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "next" }),
        __metadata("design:type", String)
    ], NegativeKeywordPagedCollectionResponse.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "offset" }),
        __metadata("design:type", Number)
    ], NegativeKeywordPagedCollectionResponse.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "prev" }),
        __metadata("design:type", String)
    ], NegativeKeywordPagedCollectionResponse.prototype, "prev", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "total" }),
        __metadata("design:type", Number)
    ], NegativeKeywordPagedCollectionResponse.prototype, "total", void 0);
    return NegativeKeywordPagedCollectionResponse;
}(utils_1.SpeakeasyBase));
exports.NegativeKeywordPagedCollectionResponse = NegativeKeywordPagedCollectionResponse;

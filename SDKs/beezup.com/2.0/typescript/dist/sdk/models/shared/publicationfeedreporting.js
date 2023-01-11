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
exports.PublicationFeedReporting = void 0;
var utils_1 = require("../../../internal/utils");
var feedtypeenum_1 = require("./feedtypeenum");
// PublicationFeedReporting
/**
 * Publication feed reporting
**/
var PublicationFeedReporting = /** @class */ (function (_super) {
    __extends(PublicationFeedReporting, _super);
    function PublicationFeedReporting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed" }),
        __metadata("design:type", Boolean)
    ], PublicationFeedReporting.prototype, "completed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endUtcDate" }),
        __metadata("design:type", Date)
    ], PublicationFeedReporting.prototype, "endUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], PublicationFeedReporting.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exportedProducts" }),
        __metadata("design:type", Number)
    ], PublicationFeedReporting.prototype, "exportedProducts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failedItems" }),
        __metadata("design:type", Number)
    ], PublicationFeedReporting.prototype, "failedItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=feedType" }),
        __metadata("design:type", String)
    ], PublicationFeedReporting.prototype, "feedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlReportGenerationErrorMessage" }),
        __metadata("design:type", String)
    ], PublicationFeedReporting.prototype, "htmlReportGenerationErrorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=htmlReportUrl" }),
        __metadata("design:type", String)
    ], PublicationFeedReporting.prototype, "htmlReportUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processingStatus" }),
        __metadata("design:type", String)
    ], PublicationFeedReporting.prototype, "processingStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishedItems" }),
        __metadata("design:type", Number)
    ], PublicationFeedReporting.prototype, "publishedItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publishedItemsWithWarning" }),
        __metadata("design:type", Number)
    ], PublicationFeedReporting.prototype, "publishedItemsWithWarning", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startUtcDate" }),
        __metadata("design:type", Date)
    ], PublicationFeedReporting.prototype, "startUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transmittedItems" }),
        __metadata("design:type", Number)
    ], PublicationFeedReporting.prototype, "transmittedItems", void 0);
    return PublicationFeedReporting;
}(utils_1.SpeakeasyBase));
exports.PublicationFeedReporting = PublicationFeedReporting;

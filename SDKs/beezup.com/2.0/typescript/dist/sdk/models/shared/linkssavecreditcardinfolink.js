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
exports.LinksSaveCreditCardInfoLink = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommoninfosummaries_1 = require("./beezupcommoninfosummaries");
var beezupcommonhttpmethodenum_1 = require("./beezupcommonhttpmethodenum");
var beezupcommonlinkparameter3_1 = require("./beezupcommonlinkparameter3");
var LinksSaveCreditCardInfoLink = /** @class */ (function (_super) {
    __extends(LinksSaveCreditCardInfoLink, _super);
    function LinksSaveCreditCardInfoLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allOptionalParamsProvided" }),
        __metadata("design:type", Boolean)
    ], LinksSaveCreditCardInfoLink.prototype, "allOptionalParamsProvided", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allRequiredParamsProvided" }),
        __metadata("design:type", Boolean)
    ], LinksSaveCreditCardInfoLink.prototype, "allRequiredParamsProvided", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LinksSaveCreditCardInfoLink.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=docUrl" }),
        __metadata("design:type", String)
    ], LinksSaveCreditCardInfoLink.prototype, "docUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], LinksSaveCreditCardInfoLink.prototype, "href", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=info" }),
        __metadata("design:type", beezupcommoninfosummaries_1.BeezUpCommonInfoSummaries)
    ], LinksSaveCreditCardInfoLink.prototype, "info", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LinksSaveCreditCardInfoLink.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], LinksSaveCreditCardInfoLink.prototype, "method", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=operationId" }),
        __metadata("design:type", String)
    ], LinksSaveCreditCardInfoLink.prototype, "operationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameters", elemType: beezupcommonlinkparameter3_1.BeezUpCommonLinkParameter3 }),
        __metadata("design:type", Object)
    ], LinksSaveCreditCardInfoLink.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urlTemplated" }),
        __metadata("design:type", Boolean)
    ], LinksSaveCreditCardInfoLink.prototype, "urlTemplated", void 0);
    return LinksSaveCreditCardInfoLink;
}(utils_1.SpeakeasyBase));
exports.LinksSaveCreditCardInfoLink = LinksSaveCreditCardInfoLink;

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
exports.CustomerIndexLovLinks = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommonlovlink3_1 = require("./beezupcommonlovlink3");
var CustomerIndexLovLinks = /** @class */ (function (_super) {
    __extends(CustomerIndexLovLinks, _super);
    function CustomerIndexLovLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activeOfferLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "activeOfferLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPTimeZoneLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "beezUPTimeZoneLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contractTerminationReasonLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "contractTerminationReasonLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=countryLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "countryLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerStatusLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "customerStatusLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=invoicePaymentStatusLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "invoicePaymentStatusLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offerLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "offerLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeCountryLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "storeCountryLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeSectorLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], CustomerIndexLovLinks.prototype, "storeSectorLov", void 0);
    return CustomerIndexLovLinks;
}(utils_1.SpeakeasyBase));
exports.CustomerIndexLovLinks = CustomerIndexLovLinks;

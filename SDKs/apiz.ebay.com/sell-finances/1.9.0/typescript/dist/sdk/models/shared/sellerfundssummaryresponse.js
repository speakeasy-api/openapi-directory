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
exports.SellerFundsSummaryResponse = void 0;
var utils_1 = require("../../../internal/utils");
var amount_1 = require("./amount");
// SellerFundsSummaryResponse
/**
 * This type is used by the response payload of the getSellerFundsSummary method. All of the funds returned in getSellerFundsSummary are funds that have not yet been paid to the seller through a seller payout. If there are no funds that are pending, on hold, or being processed for the seller's account, no response payload is returned, and an http status code of 204 - No Content is returned instead.
**/
var SellerFundsSummaryResponse = /** @class */ (function (_super) {
    __extends(SellerFundsSummaryResponse, _super);
    function SellerFundsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availableFunds" }),
        __metadata("design:type", amount_1.Amount)
    ], SellerFundsSummaryResponse.prototype, "availableFunds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fundsOnHold" }),
        __metadata("design:type", amount_1.Amount)
    ], SellerFundsSummaryResponse.prototype, "fundsOnHold", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processingFunds" }),
        __metadata("design:type", amount_1.Amount)
    ], SellerFundsSummaryResponse.prototype, "processingFunds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalFunds" }),
        __metadata("design:type", amount_1.Amount)
    ], SellerFundsSummaryResponse.prototype, "totalFunds", void 0);
    return SellerFundsSummaryResponse;
}(utils_1.SpeakeasyBase));
exports.SellerFundsSummaryResponse = SellerFundsSummaryResponse;

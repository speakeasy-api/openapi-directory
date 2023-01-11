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
exports.ParentSavingsPlanOffering = void 0;
var utils_1 = require("../../../internal/utils");
var currencycodeenum_1 = require("./currencycodeenum");
var savingsplanpaymentoptionenum_1 = require("./savingsplanpaymentoptionenum");
var savingsplantypeenum_1 = require("./savingsplantypeenum");
// ParentSavingsPlanOffering
/**
 * Information about a Savings Plan offering.
**/
var ParentSavingsPlanOffering = /** @class */ (function (_super) {
    __extends(ParentSavingsPlanOffering, _super);
    function ParentSavingsPlanOffering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], ParentSavingsPlanOffering.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=durationSeconds" }),
        __metadata("design:type", Number)
    ], ParentSavingsPlanOffering.prototype, "durationSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offeringId" }),
        __metadata("design:type", String)
    ], ParentSavingsPlanOffering.prototype, "offeringId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paymentOption" }),
        __metadata("design:type", String)
    ], ParentSavingsPlanOffering.prototype, "paymentOption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=planDescription" }),
        __metadata("design:type", String)
    ], ParentSavingsPlanOffering.prototype, "planDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=planType" }),
        __metadata("design:type", String)
    ], ParentSavingsPlanOffering.prototype, "planType", void 0);
    return ParentSavingsPlanOffering;
}(utils_1.SpeakeasyBase));
exports.ParentSavingsPlanOffering = ParentSavingsPlanOffering;

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
exports.GetOfferingStatusResult = void 0;
var utils_1 = require("../../../internal/utils");
var offeringstatus_1 = require("./offeringstatus");
// GetOfferingStatusResult
/**
 * Returns the status result for a device offering.
**/
var GetOfferingStatusResult = /** @class */ (function (_super) {
    __extends(GetOfferingStatusResult, _super);
    function GetOfferingStatusResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current", elemType: offeringstatus_1.OfferingStatus }),
        __metadata("design:type", Object)
    ], GetOfferingStatusResult.prototype, "current", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextPeriod", elemType: offeringstatus_1.OfferingStatus }),
        __metadata("design:type", Object)
    ], GetOfferingStatusResult.prototype, "nextPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nextToken" }),
        __metadata("design:type", String)
    ], GetOfferingStatusResult.prototype, "nextToken", void 0);
    return GetOfferingStatusResult;
}(utils_1.SpeakeasyBase));
exports.GetOfferingStatusResult = GetOfferingStatusResult;

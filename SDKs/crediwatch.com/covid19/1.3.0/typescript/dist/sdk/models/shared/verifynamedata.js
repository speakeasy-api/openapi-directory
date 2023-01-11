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
exports.VerifyNameData = void 0;
var utils_1 = require("../../../internal/utils");
var VerifyNameData = /** @class */ (function (_super) {
    __extends(VerifyNameData, _super);
    function VerifyNameData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=business_name" }),
        __metadata("design:type", String)
    ], VerifyNameData.prototype, "businessName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], VerifyNameData.prototype, "city", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=department_code_and_type" }),
        __metadata("design:type", Array)
    ], VerifyNameData.prototype, "departmentCodeAndType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], VerifyNameData.prototype, "entityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_gstn_verified" }),
        __metadata("design:type", Boolean)
    ], VerifyNameData.prototype, "isGstnVerified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=nature_of_business" }),
        __metadata("design:type", Array)
    ], VerifyNameData.prototype, "natureOfBusiness", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pincode" }),
        __metadata("design:type", Number)
    ], VerifyNameData.prototype, "pincode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_date" }),
        __metadata("design:type", String)
    ], VerifyNameData.prototype, "registrationDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registration_type" }),
        __metadata("design:type", String)
    ], VerifyNameData.prototype, "registrationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], VerifyNameData.prototype, "state", void 0);
    return VerifyNameData;
}(utils_1.SpeakeasyBase));
exports.VerifyNameData = VerifyNameData;

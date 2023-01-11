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
exports.CarePlan = exports.CarePlanPlanTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var CarePlanPlanTypeEnum;
(function (CarePlanPlanTypeEnum) {
    CarePlanPlanTypeEnum["One"] = "1";
    CarePlanPlanTypeEnum["Two"] = "2";
    CarePlanPlanTypeEnum["Three"] = "3";
    CarePlanPlanTypeEnum["Four"] = "4";
    CarePlanPlanTypeEnum["Five"] = "5";
    CarePlanPlanTypeEnum["Six"] = "6";
})(CarePlanPlanTypeEnum = exports.CarePlanPlanTypeEnum || (exports.CarePlanPlanTypeEnum = {}));
var CarePlan = /** @class */ (function (_super) {
    __extends(CarePlan, _super);
    function CarePlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appointment" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code_system" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "codeSystem", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CarePlan.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instructions" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "instructions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=patient" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=plan_type" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "planType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scheduled_date" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "scheduledDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], CarePlan.prototype, "updatedAt", void 0);
    return CarePlan;
}(utils_1.SpeakeasyBase));
exports.CarePlan = CarePlan;

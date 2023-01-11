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
exports.SlotValueElicitationSetting = void 0;
var utils_1 = require("../../../internal/utils");
var slotdefaultvaluespecification_1 = require("./slotdefaultvaluespecification");
var promptspecification_1 = require("./promptspecification");
var sampleutterance_1 = require("./sampleutterance");
var slotconstraintenum_1 = require("./slotconstraintenum");
var waitandcontinuespecification_1 = require("./waitandcontinuespecification");
// SlotValueElicitationSetting
/**
 * Settings that you can use for eliciting a slot value.
**/
var SlotValueElicitationSetting = /** @class */ (function (_super) {
    __extends(SlotValueElicitationSetting, _super);
    function SlotValueElicitationSetting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultValueSpecification" }),
        __metadata("design:type", slotdefaultvaluespecification_1.SlotDefaultValueSpecification)
    ], SlotValueElicitationSetting.prototype, "defaultValueSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=promptSpecification" }),
        __metadata("design:type", promptspecification_1.PromptSpecification)
    ], SlotValueElicitationSetting.prototype, "promptSpecification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sampleUtterances", elemType: sampleutterance_1.SampleUtterance }),
        __metadata("design:type", Array)
    ], SlotValueElicitationSetting.prototype, "sampleUtterances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slotConstraint" }),
        __metadata("design:type", String)
    ], SlotValueElicitationSetting.prototype, "slotConstraint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=waitAndContinueSpecification" }),
        __metadata("design:type", waitandcontinuespecification_1.WaitAndContinueSpecification)
    ], SlotValueElicitationSetting.prototype, "waitAndContinueSpecification", void 0);
    return SlotValueElicitationSetting;
}(utils_1.SpeakeasyBase));
exports.SlotValueElicitationSetting = SlotValueElicitationSetting;

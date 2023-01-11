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
exports.TypedAttributeValueRange = void 0;
var utils_1 = require("../../../internal/utils");
var rangemodeenum_1 = require("./rangemodeenum");
var typedattributevalue_1 = require("./typedattributevalue");
// TypedAttributeValueRange
/**
 * A range of attribute values. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_range_filters.html">Range Filters</a>.
**/
var TypedAttributeValueRange = /** @class */ (function (_super) {
    __extends(TypedAttributeValueRange, _super);
    function TypedAttributeValueRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndMode" }),
        __metadata("design:type", String)
    ], TypedAttributeValueRange.prototype, "endMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndValue" }),
        __metadata("design:type", typedattributevalue_1.TypedAttributeValue)
    ], TypedAttributeValueRange.prototype, "endValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StartMode" }),
        __metadata("design:type", String)
    ], TypedAttributeValueRange.prototype, "startMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StartValue" }),
        __metadata("design:type", typedattributevalue_1.TypedAttributeValue)
    ], TypedAttributeValueRange.prototype, "startValue", void 0);
    return TypedAttributeValueRange;
}(utils_1.SpeakeasyBase));
exports.TypedAttributeValueRange = TypedAttributeValueRange;

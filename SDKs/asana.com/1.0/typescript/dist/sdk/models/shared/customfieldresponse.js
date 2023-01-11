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
exports.CustomFieldResponse = exports.CustomFieldResponseTypeEnum = exports.CustomFieldResponseResourceSubtypeEnum = exports.CustomFieldResponseFormatEnum = exports.CustomFieldResponseEnumValue = exports.CustomFieldResponseCustomLabelPositionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var usercompact_1 = require("./usercompact");
var enumoption_1 = require("./enumoption");
var CustomFieldResponseCustomLabelPositionEnum;
(function (CustomFieldResponseCustomLabelPositionEnum) {
    CustomFieldResponseCustomLabelPositionEnum["Prefix"] = "prefix";
    CustomFieldResponseCustomLabelPositionEnum["Suffix"] = "suffix";
})(CustomFieldResponseCustomLabelPositionEnum = exports.CustomFieldResponseCustomLabelPositionEnum || (exports.CustomFieldResponseCustomLabelPositionEnum = {}));
// CustomFieldResponseEnumValue
/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
**/
var CustomFieldResponseEnumValue = /** @class */ (function (_super) {
    __extends(CustomFieldResponseEnumValue, _super);
    function CustomFieldResponseEnumValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], CustomFieldResponseEnumValue.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldResponseEnumValue.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldResponseEnumValue.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldResponseEnumValue.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldResponseEnumValue.prototype, "resourceType", void 0);
    return CustomFieldResponseEnumValue;
}(utils_1.SpeakeasyBase));
exports.CustomFieldResponseEnumValue = CustomFieldResponseEnumValue;
var CustomFieldResponseFormatEnum;
(function (CustomFieldResponseFormatEnum) {
    CustomFieldResponseFormatEnum["Currency"] = "currency";
    CustomFieldResponseFormatEnum["Identifier"] = "identifier";
    CustomFieldResponseFormatEnum["Percentage"] = "percentage";
    CustomFieldResponseFormatEnum["Custom"] = "custom";
    CustomFieldResponseFormatEnum["None"] = "none";
})(CustomFieldResponseFormatEnum = exports.CustomFieldResponseFormatEnum || (exports.CustomFieldResponseFormatEnum = {}));
var CustomFieldResponseResourceSubtypeEnum;
(function (CustomFieldResponseResourceSubtypeEnum) {
    CustomFieldResponseResourceSubtypeEnum["Text"] = "text";
    CustomFieldResponseResourceSubtypeEnum["Enum"] = "enum";
    CustomFieldResponseResourceSubtypeEnum["MultiEnum"] = "multi_enum";
    CustomFieldResponseResourceSubtypeEnum["Number"] = "number";
})(CustomFieldResponseResourceSubtypeEnum = exports.CustomFieldResponseResourceSubtypeEnum || (exports.CustomFieldResponseResourceSubtypeEnum = {}));
var CustomFieldResponseTypeEnum;
(function (CustomFieldResponseTypeEnum) {
    CustomFieldResponseTypeEnum["Text"] = "text";
    CustomFieldResponseTypeEnum["Enum"] = "enum";
    CustomFieldResponseTypeEnum["MultiEnum"] = "multi_enum";
    CustomFieldResponseTypeEnum["Number"] = "number";
})(CustomFieldResponseTypeEnum = exports.CustomFieldResponseTypeEnum || (exports.CustomFieldResponseTypeEnum = {}));
// CustomFieldResponse
/**
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 *
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
**/
var CustomFieldResponse = /** @class */ (function (_super) {
    __extends(CustomFieldResponse, _super);
    function CustomFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", usercompact_1.UserCompact)
    ], CustomFieldResponse.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_label" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "customLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_label_position" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "customLabelPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_value" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "displayValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldResponse.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enum_options", elemType: enumoption_1.EnumOption }),
        __metadata("design:type", Array)
    ], CustomFieldResponse.prototype, "enumOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enum_value" }),
        __metadata("design:type", CustomFieldResponseEnumValue)
    ], CustomFieldResponse.prototype, "enumValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_notifications_enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldResponse.prototype, "hasNotificationsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_global_to_workspace" }),
        __metadata("design:type", Boolean)
    ], CustomFieldResponse.prototype, "isGlobalToWorkspace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multi_enum_values", elemType: enumoption_1.EnumOption }),
        __metadata("design:type", Array)
    ], CustomFieldResponse.prototype, "multiEnumValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_value" }),
        __metadata("design:type", Number)
    ], CustomFieldResponse.prototype, "numberValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], CustomFieldResponse.prototype, "precision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "resourceSubtype", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_value" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "textValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomFieldResponse.prototype, "type", void 0);
    return CustomFieldResponse;
}(utils_1.SpeakeasyBase));
exports.CustomFieldResponse = CustomFieldResponse;

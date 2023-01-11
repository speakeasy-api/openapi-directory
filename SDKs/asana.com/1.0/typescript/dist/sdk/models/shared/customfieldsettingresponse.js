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
exports.CustomFieldSettingResponse = exports.CustomFieldSettingResponseProject = exports.CustomFieldSettingResponseParent = exports.CustomFieldSettingResponseCustomField = exports.CustomFieldSettingResponseCustomFieldTypeEnum = exports.CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = exports.CustomFieldSettingResponseCustomFieldFormatEnum = exports.CustomFieldSettingResponseCustomFieldEnumValue = exports.CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var usercompact_1 = require("./usercompact");
var enumoption_1 = require("./enumoption");
var CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum;
(function (CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum) {
    CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum["Prefix"] = "prefix";
    CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum["Suffix"] = "suffix";
})(CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum = exports.CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum || (exports.CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum = {}));
// CustomFieldSettingResponseCustomFieldEnumValue
/**
 * *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
**/
var CustomFieldSettingResponseCustomFieldEnumValue = /** @class */ (function (_super) {
    __extends(CustomFieldSettingResponseCustomFieldEnumValue, _super);
    function CustomFieldSettingResponseCustomFieldEnumValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomFieldEnumValue.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldSettingResponseCustomFieldEnumValue.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomFieldEnumValue.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomFieldEnumValue.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomFieldEnumValue.prototype, "resourceType", void 0);
    return CustomFieldSettingResponseCustomFieldEnumValue;
}(utils_1.SpeakeasyBase));
exports.CustomFieldSettingResponseCustomFieldEnumValue = CustomFieldSettingResponseCustomFieldEnumValue;
var CustomFieldSettingResponseCustomFieldFormatEnum;
(function (CustomFieldSettingResponseCustomFieldFormatEnum) {
    CustomFieldSettingResponseCustomFieldFormatEnum["Currency"] = "currency";
    CustomFieldSettingResponseCustomFieldFormatEnum["Identifier"] = "identifier";
    CustomFieldSettingResponseCustomFieldFormatEnum["Percentage"] = "percentage";
    CustomFieldSettingResponseCustomFieldFormatEnum["Custom"] = "custom";
    CustomFieldSettingResponseCustomFieldFormatEnum["None"] = "none";
})(CustomFieldSettingResponseCustomFieldFormatEnum = exports.CustomFieldSettingResponseCustomFieldFormatEnum || (exports.CustomFieldSettingResponseCustomFieldFormatEnum = {}));
var CustomFieldSettingResponseCustomFieldResourceSubtypeEnum;
(function (CustomFieldSettingResponseCustomFieldResourceSubtypeEnum) {
    CustomFieldSettingResponseCustomFieldResourceSubtypeEnum["Text"] = "text";
    CustomFieldSettingResponseCustomFieldResourceSubtypeEnum["Enum"] = "enum";
    CustomFieldSettingResponseCustomFieldResourceSubtypeEnum["MultiEnum"] = "multi_enum";
    CustomFieldSettingResponseCustomFieldResourceSubtypeEnum["Number"] = "number";
})(CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = exports.CustomFieldSettingResponseCustomFieldResourceSubtypeEnum || (exports.CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = {}));
var CustomFieldSettingResponseCustomFieldTypeEnum;
(function (CustomFieldSettingResponseCustomFieldTypeEnum) {
    CustomFieldSettingResponseCustomFieldTypeEnum["Text"] = "text";
    CustomFieldSettingResponseCustomFieldTypeEnum["Enum"] = "enum";
    CustomFieldSettingResponseCustomFieldTypeEnum["MultiEnum"] = "multi_enum";
    CustomFieldSettingResponseCustomFieldTypeEnum["Number"] = "number";
})(CustomFieldSettingResponseCustomFieldTypeEnum = exports.CustomFieldSettingResponseCustomFieldTypeEnum || (exports.CustomFieldSettingResponseCustomFieldTypeEnum = {}));
// CustomFieldSettingResponseCustomField
/**
 * The custom field that is applied to the `parent`.
**/
var CustomFieldSettingResponseCustomField = /** @class */ (function (_super) {
    __extends(CustomFieldSettingResponseCustomField, _super);
    function CustomFieldSettingResponseCustomField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", usercompact_1.UserCompact)
    ], CustomFieldSettingResponseCustomField.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_label" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "customLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_label_position" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "customLabelPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_value" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "displayValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldSettingResponseCustomField.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enum_options", elemType: enumoption_1.EnumOption }),
        __metadata("design:type", Array)
    ], CustomFieldSettingResponseCustomField.prototype, "enumOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enum_value" }),
        __metadata("design:type", CustomFieldSettingResponseCustomFieldEnumValue)
    ], CustomFieldSettingResponseCustomField.prototype, "enumValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_notifications_enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldSettingResponseCustomField.prototype, "hasNotificationsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_global_to_workspace" }),
        __metadata("design:type", Boolean)
    ], CustomFieldSettingResponseCustomField.prototype, "isGlobalToWorkspace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=multi_enum_values", elemType: enumoption_1.EnumOption }),
        __metadata("design:type", Array)
    ], CustomFieldSettingResponseCustomField.prototype, "multiEnumValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_value" }),
        __metadata("design:type", Number)
    ], CustomFieldSettingResponseCustomField.prototype, "numberValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], CustomFieldSettingResponseCustomField.prototype, "precision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "resourceSubtype", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_value" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "textValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseCustomField.prototype, "type", void 0);
    return CustomFieldSettingResponseCustomField;
}(utils_1.SpeakeasyBase));
exports.CustomFieldSettingResponseCustomField = CustomFieldSettingResponseCustomField;
// CustomFieldSettingResponseParent
/**
 * The parent to which the custom field is applied. This can be a project or portfolio and indicates that the tasks or projects that the parent contains may be given custom field values for this custom field.
**/
var CustomFieldSettingResponseParent = /** @class */ (function (_super) {
    __extends(CustomFieldSettingResponseParent, _super);
    function CustomFieldSettingResponseParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseParent.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseParent.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseParent.prototype, "resourceType", void 0);
    return CustomFieldSettingResponseParent;
}(utils_1.SpeakeasyBase));
exports.CustomFieldSettingResponseParent = CustomFieldSettingResponseParent;
// CustomFieldSettingResponseProject
/**
 * *Deprecated: new integrations should prefer the `parent` field.* The id of the project that this custom field settings refers to.
**/
var CustomFieldSettingResponseProject = /** @class */ (function (_super) {
    __extends(CustomFieldSettingResponseProject, _super);
    function CustomFieldSettingResponseProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseProject.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseProject.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponseProject.prototype, "resourceType", void 0);
    return CustomFieldSettingResponseProject;
}(utils_1.SpeakeasyBase));
exports.CustomFieldSettingResponseProject = CustomFieldSettingResponseProject;
// CustomFieldSettingResponse
/**
 * Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
**/
var CustomFieldSettingResponse = /** @class */ (function (_super) {
    __extends(CustomFieldSettingResponse, _super);
    function CustomFieldSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_field" }),
        __metadata("design:type", CustomFieldSettingResponseCustomField)
    ], CustomFieldSettingResponse.prototype, "customField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gid" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponse.prototype, "gid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_important" }),
        __metadata("design:type", Boolean)
    ], CustomFieldSettingResponse.prototype, "isImportant", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent" }),
        __metadata("design:type", CustomFieldSettingResponseParent)
    ], CustomFieldSettingResponse.prototype, "parent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=project" }),
        __metadata("design:type", CustomFieldSettingResponseProject)
    ], CustomFieldSettingResponse.prototype, "project", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], CustomFieldSettingResponse.prototype, "resourceType", void 0);
    return CustomFieldSettingResponse;
}(utils_1.SpeakeasyBase));
exports.CustomFieldSettingResponse = CustomFieldSettingResponse;

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
exports.CustomFieldRequestInput = exports.CustomFieldRequestResourceSubtypeEnum = exports.CustomFieldRequestFormatEnum = exports.CustomFieldRequestCustomLabelPositionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var enumoption_1 = require("./enumoption");
var CustomFieldRequestCustomLabelPositionEnum;
(function (CustomFieldRequestCustomLabelPositionEnum) {
    CustomFieldRequestCustomLabelPositionEnum["Prefix"] = "prefix";
    CustomFieldRequestCustomLabelPositionEnum["Suffix"] = "suffix";
})(CustomFieldRequestCustomLabelPositionEnum = exports.CustomFieldRequestCustomLabelPositionEnum || (exports.CustomFieldRequestCustomLabelPositionEnum = {}));
var CustomFieldRequestFormatEnum;
(function (CustomFieldRequestFormatEnum) {
    CustomFieldRequestFormatEnum["Currency"] = "currency";
    CustomFieldRequestFormatEnum["Identifier"] = "identifier";
    CustomFieldRequestFormatEnum["Percentage"] = "percentage";
    CustomFieldRequestFormatEnum["Custom"] = "custom";
    CustomFieldRequestFormatEnum["None"] = "none";
})(CustomFieldRequestFormatEnum = exports.CustomFieldRequestFormatEnum || (exports.CustomFieldRequestFormatEnum = {}));
var CustomFieldRequestResourceSubtypeEnum;
(function (CustomFieldRequestResourceSubtypeEnum) {
    CustomFieldRequestResourceSubtypeEnum["Text"] = "text";
    CustomFieldRequestResourceSubtypeEnum["Enum"] = "enum";
    CustomFieldRequestResourceSubtypeEnum["MultiEnum"] = "multi_enum";
    CustomFieldRequestResourceSubtypeEnum["Number"] = "number";
})(CustomFieldRequestResourceSubtypeEnum = exports.CustomFieldRequestResourceSubtypeEnum || (exports.CustomFieldRequestResourceSubtypeEnum = {}));
// CustomFieldRequestInput
/**
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 *
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
**/
var CustomFieldRequestInput = /** @class */ (function (_super) {
    __extends(CustomFieldRequestInput, _super);
    function CustomFieldRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency_code" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_label" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "customLabel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_label_position" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "customLabelPosition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldRequestInput.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enum_options", elemType: enumoption_1.EnumOptionInput }),
        __metadata("design:type", Array)
    ], CustomFieldRequestInput.prototype, "enumOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_notifications_enabled" }),
        __metadata("design:type", Boolean)
    ], CustomFieldRequestInput.prototype, "hasNotificationsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number_value" }),
        __metadata("design:type", Number)
    ], CustomFieldRequestInput.prototype, "numberValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=precision" }),
        __metadata("design:type", Number)
    ], CustomFieldRequestInput.prototype, "precision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_subtype" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "resourceSubtype", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_value" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "textValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=workspace" }),
        __metadata("design:type", String)
    ], CustomFieldRequestInput.prototype, "workspace", void 0);
    return CustomFieldRequestInput;
}(utils_1.SpeakeasyBase));
exports.CustomFieldRequestInput = CustomFieldRequestInput;

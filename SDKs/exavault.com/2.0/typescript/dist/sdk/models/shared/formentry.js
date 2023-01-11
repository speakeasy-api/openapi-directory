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
exports.FormEntry = exports.FormEntryAttributes = exports.FormEntryAttributesStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var formentryfield_1 = require("./formentryfield");
var FormEntryAttributesStatusEnum;
(function (FormEntryAttributesStatusEnum) {
    FormEntryAttributesStatusEnum["Pending"] = "pending";
    FormEntryAttributesStatusEnum["Completed"] = "completed";
})(FormEntryAttributesStatusEnum = exports.FormEntryAttributesStatusEnum || (exports.FormEntryAttributesStatusEnum = {}));
var FormEntryAttributes = /** @class */ (function (_super) {
    __extends(FormEntryAttributes, _super);
    function FormEntryAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], FormEntryAttributes.prototype, "created", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fields", elemType: formentryfield_1.FormEntryField }),
        __metadata("design:type", Array)
    ], FormEntryAttributes.prototype, "fields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified" }),
        __metadata("design:type", Date)
    ], FormEntryAttributes.prototype, "modified", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paths" }),
        __metadata("design:type", Array)
    ], FormEntryAttributes.prototype, "paths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], FormEntryAttributes.prototype, "status", void 0);
    return FormEntryAttributes;
}(utils_1.SpeakeasyBase));
exports.FormEntryAttributes = FormEntryAttributes;
// FormEntry
/**
 * Contains the data submitted for a form.
**/
var FormEntry = /** @class */ (function (_super) {
    __extends(FormEntry, _super);
    function FormEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", FormEntryAttributes)
    ], FormEntry.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], FormEntry.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], FormEntry.prototype, "type", void 0);
    return FormEntry;
}(utils_1.SpeakeasyBase));
exports.FormEntry = FormEntry;

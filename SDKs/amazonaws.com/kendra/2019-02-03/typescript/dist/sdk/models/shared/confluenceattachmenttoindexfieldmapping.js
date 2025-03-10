"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ConfluenceAttachmentToIndexFieldMapping = void 0;
var utils_1 = require("../../../internal/utils");
var confluenceattachmentfieldnameenum_1 = require("./confluenceattachmentfieldnameenum");
var class_transformer_1 = require("class-transformer");
/**
 * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the <code>UpdateIndex</code> API before you map to Confluence fields. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html">Mapping data source fields</a>. The Confuence data source field names must exist in your Confluence custom metadata.
 */
var ConfluenceAttachmentToIndexFieldMapping = /** @class */ (function (_super) {
    __extends(ConfluenceAttachmentToIndexFieldMapping, _super);
    function ConfluenceAttachmentToIndexFieldMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DataSourceFieldName" }),
        __metadata("design:type", String)
    ], ConfluenceAttachmentToIndexFieldMapping.prototype, "dataSourceFieldName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DateFieldFormat" }),
        __metadata("design:type", String)
    ], ConfluenceAttachmentToIndexFieldMapping.prototype, "dateFieldFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "IndexFieldName" }),
        __metadata("design:type", String)
    ], ConfluenceAttachmentToIndexFieldMapping.prototype, "indexFieldName", void 0);
    return ConfluenceAttachmentToIndexFieldMapping;
}(utils_1.SpeakeasyBase));
exports.ConfluenceAttachmentToIndexFieldMapping = ConfluenceAttachmentToIndexFieldMapping;

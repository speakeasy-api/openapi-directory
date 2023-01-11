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
exports.StorageDescriptor = void 0;
var utils_1 = require("../../../internal/utils");
var column_1 = require("./column");
var schemareference_1 = require("./schemareference");
var serdeinfo_1 = require("./serdeinfo");
var skewedinfo_1 = require("./skewedinfo");
var order_1 = require("./order");
// StorageDescriptor
/**
 * Describes the physical storage of table data.
**/
var StorageDescriptor = /** @class */ (function (_super) {
    __extends(StorageDescriptor, _super);
    function StorageDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BucketColumns" }),
        __metadata("design:type", Array)
    ], StorageDescriptor.prototype, "bucketColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Columns", elemType: column_1.Column }),
        __metadata("design:type", Array)
    ], StorageDescriptor.prototype, "columns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Compressed" }),
        __metadata("design:type", Boolean)
    ], StorageDescriptor.prototype, "compressed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputFormat" }),
        __metadata("design:type", String)
    ], StorageDescriptor.prototype, "inputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Location" }),
        __metadata("design:type", String)
    ], StorageDescriptor.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumberOfBuckets" }),
        __metadata("design:type", Number)
    ], StorageDescriptor.prototype, "numberOfBuckets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OutputFormat" }),
        __metadata("design:type", String)
    ], StorageDescriptor.prototype, "outputFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Parameters" }),
        __metadata("design:type", Object)
    ], StorageDescriptor.prototype, "parameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SchemaReference" }),
        __metadata("design:type", schemareference_1.SchemaReference)
    ], StorageDescriptor.prototype, "schemaReference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SerdeInfo" }),
        __metadata("design:type", serdeinfo_1.SerDeInfo)
    ], StorageDescriptor.prototype, "serdeInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SkewedInfo" }),
        __metadata("design:type", skewedinfo_1.SkewedInfo)
    ], StorageDescriptor.prototype, "skewedInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SortColumns", elemType: order_1.Order }),
        __metadata("design:type", Array)
    ], StorageDescriptor.prototype, "sortColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StoredAsSubDirectories" }),
        __metadata("design:type", Boolean)
    ], StorageDescriptor.prototype, "storedAsSubDirectories", void 0);
    return StorageDescriptor;
}(utils_1.SpeakeasyBase));
exports.StorageDescriptor = StorageDescriptor;

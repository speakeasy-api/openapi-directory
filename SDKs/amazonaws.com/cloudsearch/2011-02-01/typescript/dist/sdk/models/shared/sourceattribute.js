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
exports.SourceAttribute = void 0;
var utils_1 = require("../../../internal/utils");
var sourcedata_1 = require("./sourcedata");
var sourcedatafunctionenum_1 = require("./sourcedatafunctionenum");
var sourcedatamap_1 = require("./sourcedatamap");
var sourcedatatrimtitle_1 = require("./sourcedatatrimtitle");
// SourceAttribute
/**
 * Identifies the source data for an index field. An optional data transformation can be applied to the source data when populating the index field. By default, the value of the source attribute is copied to the index field.
**/
var SourceAttribute = /** @class */ (function (_super) {
    __extends(SourceAttribute, _super);
    function SourceAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", sourcedata_1.SourceData)
    ], SourceAttribute.prototype, "sourceDataCopy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], SourceAttribute.prototype, "sourceDataFunction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", sourcedatamap_1.SourceDataMap)
    ], SourceAttribute.prototype, "sourceDataMap", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", sourcedatatrimtitle_1.SourceDataTrimTitle)
    ], SourceAttribute.prototype, "sourceDataTrimTitle", void 0);
    return SourceAttribute;
}(utils_1.SpeakeasyBase));
exports.SourceAttribute = SourceAttribute;

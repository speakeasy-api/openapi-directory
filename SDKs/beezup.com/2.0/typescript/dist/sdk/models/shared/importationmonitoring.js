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
exports.ImportationMonitoring = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommonusererrormessage_1 = require("./beezupcommonusererrormessage");
var importationmonitoringlinks_1 = require("./importationmonitoringlinks");
// ImportationMonitoring
/**
 * Describe the reporting of the catalog importation
**/
var ImportationMonitoring = /** @class */ (function (_super) {
    __extends(ImportationMonitoring, _super);
    function ImportationMonitoring() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beginUtcDate" }),
        __metadata("design:type", Date)
    ], ImportationMonitoring.prototype, "beginUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: beezupcommonusererrormessage_1.BeezUpCommonUserErrorMessage }),
        __metadata("design:type", Array)
    ], ImportationMonitoring.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionId" }),
        __metadata("design:type", String)
    ], ImportationMonitoring.prototype, "executionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastUpdateUtcDate" }),
        __metadata("design:type", Date)
    ], ImportationMonitoring.prototype, "lastUpdateUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", importationmonitoringlinks_1.ImportationMonitoringLinks)
    ], ImportationMonitoring.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=steps" }),
        __metadata("design:type", Object)
    ], ImportationMonitoring.prototype, "steps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], ImportationMonitoring.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], ImportationMonitoring.prototype, "userId", void 0);
    return ImportationMonitoring;
}(utils_1.SpeakeasyBase));
exports.ImportationMonitoring = ImportationMonitoring;

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
exports.RecordT = void 0;
var utils_1 = require("../../../internal/utils");
var dimension_1 = require("./dimension");
var measurevaluetypeenum_1 = require("./measurevaluetypeenum");
var timeunitenum_1 = require("./timeunitenum");
// RecordT
/**
 * Record represents a time series data point being written into Timestream. Each record contains an array of dimensions. Dimensions represent the meta data attributes of a time series data point such as the instance name or availability zone of an EC2 instance. A record also contains the measure name which is the name of the measure being collected for example the CPU utilization of an EC2 instance. A record also contains the measure value and the value type which is the data type of the measure value. In addition, the record contains the timestamp when the measure was collected that the timestamp unit which represents the granularity of the timestamp.
**/
var RecordT = /** @class */ (function (_super) {
    __extends(RecordT, _super);
    function RecordT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Dimensions", elemType: dimension_1.Dimension }),
        __metadata("design:type", Array)
    ], RecordT.prototype, "dimensions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MeasureName" }),
        __metadata("design:type", String)
    ], RecordT.prototype, "measureName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MeasureValue" }),
        __metadata("design:type", String)
    ], RecordT.prototype, "measureValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MeasureValueType" }),
        __metadata("design:type", String)
    ], RecordT.prototype, "measureValueType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Time" }),
        __metadata("design:type", String)
    ], RecordT.prototype, "time", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TimeUnit" }),
        __metadata("design:type", String)
    ], RecordT.prototype, "timeUnit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], RecordT.prototype, "version", void 0);
    return RecordT;
}(utils_1.SpeakeasyBase));
exports.RecordT = RecordT;

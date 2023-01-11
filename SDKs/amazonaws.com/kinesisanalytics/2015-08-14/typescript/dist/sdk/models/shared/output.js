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
exports.Output = void 0;
var utils_1 = require("../../../internal/utils");
var destinationschema_1 = require("./destinationschema");
var kinesisfirehoseoutput_1 = require("./kinesisfirehoseoutput");
var kinesisstreamsoutput_1 = require("./kinesisstreamsoutput");
var lambdaoutput_1 = require("./lambdaoutput");
// Output
/**
 * <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>. </p>
**/
var Output = /** @class */ (function (_super) {
    __extends(Output, _super);
    function Output() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DestinationSchema" }),
        __metadata("design:type", destinationschema_1.DestinationSchema)
    ], Output.prototype, "destinationSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisFirehoseOutput" }),
        __metadata("design:type", kinesisfirehoseoutput_1.KinesisFirehoseOutput)
    ], Output.prototype, "kinesisFirehoseOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisStreamsOutput" }),
        __metadata("design:type", kinesisstreamsoutput_1.KinesisStreamsOutput)
    ], Output.prototype, "kinesisStreamsOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LambdaOutput" }),
        __metadata("design:type", lambdaoutput_1.LambdaOutput)
    ], Output.prototype, "lambdaOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Output.prototype, "name", void 0);
    return Output;
}(utils_1.SpeakeasyBase));
exports.Output = Output;

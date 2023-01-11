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
exports.ModifyEndpointMessage = void 0;
var utils_1 = require("../../../internal/utils");
var dmstransfersettings_1 = require("./dmstransfersettings");
var docdbsettings_1 = require("./docdbsettings");
var dynamodbsettings_1 = require("./dynamodbsettings");
var elasticsearchsettings_1 = require("./elasticsearchsettings");
var replicationendpointtypevalueenum_1 = require("./replicationendpointtypevalueenum");
var ibmdb2settings_1 = require("./ibmdb2settings");
var kafkasettings_1 = require("./kafkasettings");
var kinesissettings_1 = require("./kinesissettings");
var microsoftsqlserversettings_1 = require("./microsoftsqlserversettings");
var mongodbsettings_1 = require("./mongodbsettings");
var mysqlsettings_1 = require("./mysqlsettings");
var neptunesettings_1 = require("./neptunesettings");
var oraclesettings_1 = require("./oraclesettings");
var postgresqlsettings_1 = require("./postgresqlsettings");
var redissettings_1 = require("./redissettings");
var redshiftsettings_1 = require("./redshiftsettings");
var s3settings_1 = require("./s3settings");
var dmssslmodevalueenum_1 = require("./dmssslmodevalueenum");
var sybasesettings_1 = require("./sybasesettings");
// ModifyEndpointMessage
/**
 * <p/>
**/
var ModifyEndpointMessage = /** @class */ (function (_super) {
    __extends(ModifyEndpointMessage, _super);
    function ModifyEndpointMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CertificateArn" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "certificateArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "databaseName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DmsTransferSettings" }),
        __metadata("design:type", dmstransfersettings_1.DmsTransferSettings)
    ], ModifyEndpointMessage.prototype, "dmsTransferSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DocDbSettings" }),
        __metadata("design:type", docdbsettings_1.DocDbSettings)
    ], ModifyEndpointMessage.prototype, "docDbSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DynamoDbSettings" }),
        __metadata("design:type", dynamodbsettings_1.DynamoDbSettings)
    ], ModifyEndpointMessage.prototype, "dynamoDbSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ElasticsearchSettings" }),
        __metadata("design:type", elasticsearchsettings_1.ElasticsearchSettings)
    ], ModifyEndpointMessage.prototype, "elasticsearchSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndpointArn" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "endpointArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndpointIdentifier" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "endpointIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndpointType" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "endpointType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EngineName" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "engineName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExactSettings" }),
        __metadata("design:type", Boolean)
    ], ModifyEndpointMessage.prototype, "exactSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExternalTableDefinition" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "externalTableDefinition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExtraConnectionAttributes" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "extraConnectionAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=IBMDb2Settings" }),
        __metadata("design:type", ibmdb2settings_1.IbmDb2Settings)
    ], ModifyEndpointMessage.prototype, "ibmDb2Settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KafkaSettings" }),
        __metadata("design:type", kafkasettings_1.KafkaSettings)
    ], ModifyEndpointMessage.prototype, "kafkaSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisSettings" }),
        __metadata("design:type", kinesissettings_1.KinesisSettings)
    ], ModifyEndpointMessage.prototype, "kinesisSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MicrosoftSQLServerSettings" }),
        __metadata("design:type", microsoftsqlserversettings_1.MicrosoftSqlServerSettings)
    ], ModifyEndpointMessage.prototype, "microsoftSQLServerSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MongoDbSettings" }),
        __metadata("design:type", mongodbsettings_1.MongoDbSettings)
    ], ModifyEndpointMessage.prototype, "mongoDbSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MySQLSettings" }),
        __metadata("design:type", mysqlsettings_1.MySqlSettings)
    ], ModifyEndpointMessage.prototype, "mySQLSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NeptuneSettings" }),
        __metadata("design:type", neptunesettings_1.NeptuneSettings)
    ], ModifyEndpointMessage.prototype, "neptuneSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OracleSettings" }),
        __metadata("design:type", oraclesettings_1.OracleSettings)
    ], ModifyEndpointMessage.prototype, "oracleSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Password" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Port" }),
        __metadata("design:type", Number)
    ], ModifyEndpointMessage.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=PostgreSQLSettings" }),
        __metadata("design:type", postgresqlsettings_1.PostgreSqlSettings)
    ], ModifyEndpointMessage.prototype, "postgreSQLSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedisSettings" }),
        __metadata("design:type", redissettings_1.RedisSettings)
    ], ModifyEndpointMessage.prototype, "redisSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RedshiftSettings" }),
        __metadata("design:type", redshiftsettings_1.RedshiftSettings)
    ], ModifyEndpointMessage.prototype, "redshiftSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=S3Settings" }),
        __metadata("design:type", s3settings_1.S3Settings)
    ], ModifyEndpointMessage.prototype, "s3Settings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServerName" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "serverName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ServiceAccessRoleArn" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "serviceAccessRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SslMode" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "sslMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SybaseSettings" }),
        __metadata("design:type", sybasesettings_1.SybaseSettings)
    ], ModifyEndpointMessage.prototype, "sybaseSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], ModifyEndpointMessage.prototype, "username", void 0);
    return ModifyEndpointMessage;
}(utils_1.SpeakeasyBase));
exports.ModifyEndpointMessage = ModifyEndpointMessage;

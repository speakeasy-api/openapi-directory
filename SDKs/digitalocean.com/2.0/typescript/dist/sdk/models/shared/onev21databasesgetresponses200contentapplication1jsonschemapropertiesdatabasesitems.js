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
exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection = void 0;
var utils_1 = require("../../../internal/utils");
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection = /** @class */ (function (_super) {
    __extends(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection, _super);
    function Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection.prototype, "database", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssl" }),
        __metadata("design:type", Boolean)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection.prototype, "ssl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection.prototype, "user", void 0);
    return Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection;
}(utils_1.SpeakeasyBase));
exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection = Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection;
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum;
(function (Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum) {
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum["Pg"] = "pg";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum["Mysql"] = "mysql";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum["Redis"] = "redis";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum["Mongodb"] = "mongodb";
})(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum || (exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = {}));
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow = /** @class */ (function (_super) {
    __extends(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow, _super);
    function Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=day" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow.prototype, "day", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", Array)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hour" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow.prototype, "hour", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pending" }),
        __metadata("design:type", Boolean)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow.prototype, "pending", void 0);
    return Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow;
}(utils_1.SpeakeasyBase));
exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow = Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow;
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection = /** @class */ (function (_super) {
    __extends(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection, _super);
    function Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection.prototype, "database", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection.prototype, "host", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ssl" }),
        __metadata("design:type", Boolean)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection.prototype, "ssl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection.prototype, "uri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection.prototype, "user", void 0);
    return Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection;
}(utils_1.SpeakeasyBase));
exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection = Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection;
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum;
(function (Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum) {
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum["Creating"] = "creating";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum["Online"] = "online";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum["Resizing"] = "resizing";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum["Migrating"] = "migrating";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum["Forking"] = "forking";
})(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum || (exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum = {}));
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum;
(function (Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum) {
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum["MysqlNativePassword"] = "mysql_native_password";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum["CachingSha2Password"] = "caching_sha2_password";
})(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum || (exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum = {}));
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings = /** @class */ (function (_super) {
    __extends(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings, _super);
    function Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auth_plugin" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings.prototype, "authPlugin", void 0);
    return Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings;
}(utils_1.SpeakeasyBase));
exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings = Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings;
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum;
(function (Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum) {
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum["Primary"] = "primary";
    Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum["Normal"] = "normal";
})(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum = exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum || (exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum = {}));
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers = /** @class */ (function (_super) {
    __extends(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers, _super);
    function Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mysql_settings" }),
        __metadata("design:type", Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers.prototype, "mysqlSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers.prototype, "role", void 0);
    return Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers;
}(utils_1.SpeakeasyBase));
exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers = Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers;
var Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems = /** @class */ (function (_super) {
    __extends(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems, _super);
    function Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connection" }),
        __metadata("design:type", Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "connection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=db_names" }),
        __metadata("design:type", Array)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "dbNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=engine" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maintenance_window" }),
        __metadata("design:type", Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "maintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=num_nodes" }),
        __metadata("design:type", Number)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "numNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_connection" }),
        __metadata("design:type", Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "privateConnection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=private_network_uuid" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "privateNetworkUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=users", elemType: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers }),
        __metadata("design:type", Array)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "users", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems.prototype, "version", void 0);
    return Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;
}(utils_1.SpeakeasyBase));
exports.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems = Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;

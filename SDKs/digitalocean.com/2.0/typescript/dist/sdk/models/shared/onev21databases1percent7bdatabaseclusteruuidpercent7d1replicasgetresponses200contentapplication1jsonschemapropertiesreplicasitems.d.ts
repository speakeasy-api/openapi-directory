import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection extends SpeakeasyBase {
    database?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: boolean;
    uri?: string;
    user?: string;
}
export declare class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection extends SpeakeasyBase {
    database?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: boolean;
    uri?: string;
    user?: string;
}
export declare enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum {
    Creating = "creating",
    Online = "online",
    Resizing = "resizing",
    Migrating = "migrating",
    Forking = "forking"
}
export declare class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput extends SpeakeasyBase {
    connection?: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection;
    createdAt?: Date;
    name: string;
    privateConnection?: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection;
    privateNetworkUuid?: string;
    region?: string;
    status?: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum;
    tags?: string[];
}

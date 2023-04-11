import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetLinkedRelationsRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetLinkedRelations200ApplicationJSONRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2 extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetLinkedRelations200ApplicationJSONRelationsContracttest extends SpeakeasyBase {
    twoa9b8fa888b74b8683728e3f6f6e07f2?: GetLinkedRelations200ApplicationJSONRelationsContracttest2a9b8fa888b74b8683728e3f6f6e07f2;
}
export declare class GetLinkedRelations200ApplicationJSONRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533 extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetLinkedRelations200ApplicationJSONRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
}
export declare class GetLinkedRelations200ApplicationJSONRelationsIntegrationtest extends SpeakeasyBase {
    fiveHundredAndTwentyOneb0486Ab914d3a918943c9380a0533?: GetLinkedRelations200ApplicationJSONRelationsIntegrationtest521b0486Ab914d3a918943c9380a0533;
    a236b715E682460b97b6C1db24f7612e?: GetLinkedRelations200ApplicationJSONRelationsIntegrationtestA236b715E682460b97b6C1db24f7612e;
}
export declare class GetLinkedRelations200ApplicationJSONRelationsMock4ccd755f2c80481bA26249b55e12f5e1 extends SpeakeasyBase {
    id?: string;
    name?: string;
    updatedAt?: string;
    url?: string;
}
export declare class GetLinkedRelations200ApplicationJSONRelationsMock extends SpeakeasyBase {
    fourccd755f2c80481bA26249b55e12f5e1?: GetLinkedRelations200ApplicationJSONRelationsMock4ccd755f2c80481bA26249b55e12f5e1;
}
export declare class GetLinkedRelations200ApplicationJSONRelations extends SpeakeasyBase {
    contracttest?: GetLinkedRelations200ApplicationJSONRelationsContracttest;
    integrationtest?: GetLinkedRelations200ApplicationJSONRelationsIntegrationtest;
    mock?: GetLinkedRelations200ApplicationJSONRelationsMock;
}
/**
 * Get linked relations for an API version
 */
export declare class GetLinkedRelations200ApplicationJSON extends SpeakeasyBase {
    relations?: GetLinkedRelations200ApplicationJSONRelations;
}
export declare class GetLinkedRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get linked relations for an API version
     */
    getLinkedRelations200ApplicationJSONObject?: GetLinkedRelations200ApplicationJSON;
}

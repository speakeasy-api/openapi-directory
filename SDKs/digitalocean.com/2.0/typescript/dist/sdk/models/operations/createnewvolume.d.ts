import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNewVolumeRequestBody1Input extends SpeakeasyBase {
    description?: string;
    filesystemLabel?: Record<string, any>;
    filesystemType: string;
    name: string;
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    sizeGigabytes: number;
    snapshotId?: string;
    tags?: string[];
}
export declare class CreateNewVolumeRequestBody2Input extends SpeakeasyBase {
    description?: string;
    filesystemLabel?: Record<string, any>;
    filesystemType: string;
    name: string;
    region: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
    sizeGigabytes: number;
    snapshotId?: string;
    tags?: string[];
}
export declare class CreateNewVolume401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateNewVolumeRequest extends SpeakeasyBase {
    request: any;
}
export declare class CreateNewVolumeResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createNewVolume201ApplicationJSONAny?: any;
    createNewVolume401ApplicationJSONObject?: CreateNewVolume401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

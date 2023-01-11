import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVolumeByNameQueryParams extends SpeakeasyBase {
    name?: string;
    region?: shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum;
}
export declare class DeleteVolumeByName401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteVolumeByNameRequest extends SpeakeasyBase {
    queryParams: DeleteVolumeByNameQueryParams;
}
export declare class DeleteVolumeByNameResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteVolumeByName401ApplicationJSONObject?: DeleteVolumeByName401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}

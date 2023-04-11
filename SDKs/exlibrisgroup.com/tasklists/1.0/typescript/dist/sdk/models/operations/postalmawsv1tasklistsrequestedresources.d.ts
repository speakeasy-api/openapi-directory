import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAlmawsV1TaskListsRequestedResourcesRequest extends SpeakeasyBase {
    /**
     * The circulation desk where the action is being performed. Mandatory.
     */
    circDesk?: string;
    /**
     * The library of the given circulation desk or department where the resources are located. Mandatory.
     */
    library?: string;
    /**
     * The location code. Optional.
     */
    location?: string;
    /**
     * Operation to be preformed on the list of given requests. Currently the only supported action is 'mark_reported'. Mandatory.
     */
    op?: string;
    /**
     * The pickup institution. Optional.
     */
    pickupInst?: string;
    /**
     * Show printed results: Y/N. Optional.
     */
    printed?: string;
    /**
     * Show reported results: Y/N. Optional.
     */
    reported?: string;
}
export declare class PostAlmawsV1TaskListsRequestedResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK - This method returns an object based on rest_requested_resources.xsd. See [here](/alma/apis/docs/xsd/rest_requested_resources.xsd)
     */
    onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema?: shared.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema;
}

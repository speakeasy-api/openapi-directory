import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest extends SpeakeasyBase {
    /**
     * The operation to perform on the printout. Currently, the options are 'mark_as_printed','mark_as_canceled'
     */
    op: string;
    /**
     * The Printout ID
     */
    printoutId: string;
}
export declare class PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK - This method returns an object based on rest_printout.xsd. See [here](/alma/apis/docs/xsd/rest_printout.xsd)
     */
    onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems?: shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems;
}

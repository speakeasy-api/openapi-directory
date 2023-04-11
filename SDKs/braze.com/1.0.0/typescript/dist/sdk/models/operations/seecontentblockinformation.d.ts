import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SeeContentBlockInformationRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * The Content Block ID. This can be found by either listing Content Block information or going to the Developer Console, then API Settings, then scrolling to the bottom and searching for your Content Block API Identifier.
     */
    contentBlockId?: string;
    /**
     * (Optional) Boolean
     *
     * @remarks
     *
     * When set to ‘true’, the API returns back the Message Variation API ID of Campaigns and Canvases where this content block is included, to be used in subsequent calls. The results exclude archived or deleted Campaigns or Canvases.
     */
    includeInclusionData?: string;
}
export declare class SeeContentBlockInformationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

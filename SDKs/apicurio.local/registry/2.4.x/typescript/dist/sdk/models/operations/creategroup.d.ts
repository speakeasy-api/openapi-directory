import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Common response used when an input conflicts with existing data.
     */
    error?: shared.ErrorT;
    /**
     * The group has been successfully created.
     */
    groupMetaData?: shared.GroupMetaData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestDeleteDeviceSetOfOwnerSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestDeleteDeviceSetOfOwnerRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The UUID of the device set
     */
    id: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class TestDeleteDeviceSetOfOwnerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

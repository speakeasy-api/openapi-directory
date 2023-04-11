import { SpeakeasyBase } from "../../../internal/utils";
import { AppComponent } from "./appcomponent";
/**
 * Success
 */
export declare class ListAppVersionAppComponentsResponse extends SpeakeasyBase {
    appArn: string;
    appComponents?: AppComponent[];
    appVersion: string;
    nextToken?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 *  The result structure for the delete app request.
 */
export declare class DeleteAppResult extends SpeakeasyBase {
    /**
     *  Represents the different branches of a repository for building, deploying, and hosting an Amplify app.
     */
    app: App;
}

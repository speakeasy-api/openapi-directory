import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetSceneResponse extends SpeakeasyBase {
    arn: string;
    capabilities?: string[];
    contentLocation: string;
    creationDateTime: Date;
    description?: string;
    generatedSceneMetadata?: Record<string, string>;
    sceneId: string;
    sceneMetadata?: Record<string, string>;
    updateDateTime: Date;
    workspaceId: string;
}

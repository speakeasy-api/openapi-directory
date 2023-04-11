import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEnum } from "./applicationenum";
import { Tag } from "./tag";
import { WorkspaceImageIngestionProcessEnum } from "./workspaceimageingestionprocessenum";
export declare class ImportWorkspaceImageRequest extends SpeakeasyBase {
    applications?: ApplicationEnum[];
    ec2ImageId: string;
    imageDescription: string;
    imageName: string;
    ingestionProcess: WorkspaceImageIngestionProcessEnum;
    tags?: Tag[];
}

import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceECRImagePullerRole } from "./containerserviceecrimagepullerrole";
/**
 * <p>Describes the configuration for an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.</p> <p>For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-service-ecr-private-repo-access">Configuring access to an Amazon ECR private repository for an Amazon Lightsail container service</a> in the <i>Amazon Lightsail Developer Guide</i>.</p>
 */
export declare class PrivateRegistryAccess extends SpeakeasyBase {
    ecrImagePullerRole?: ContainerServiceECRImagePullerRole;
}

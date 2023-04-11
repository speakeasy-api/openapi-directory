import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. A list of all available Docker images in the private Bluemix registry is returned.
 */
export declare class ImageInfo extends SpeakeasyBase {
    /**
     * The time when your container image was created.
     */
    created?: number;
    /**
     * The unique identifier representing a container image.
     */
    id?: string;
    /**
     * The name of your container image.
     */
    image?: string;
    /**
     * The full path to the private Bluemix registry where the image is stored including the registry name, the organization namespace, and image tag.
     */
    repoTags?: string[];
    /**
     * The real size of the container image.
     */
    size?: number;
    /**
     * The virtual size of the container image.
     */
    virtualSize?: number;
}

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Deployments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createEnvironment - Create an environment.
    **/
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * deleteEnvironmentForRepository - Delete an environment
    **/
    deleteEnvironmentForRepository(req: operations.DeleteEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentForRepositoryResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId - This deletes a deploy key from a repository.
     *
     * Example:
     * ```
     * $ curl -XDELETE \
     * -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
     * ```
    **/
    deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * getDeploymentForRepository - Retrieve a deployment
    **/
    getDeploymentForRepository(req: operations.GetDeploymentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentForRepositoryResponse>;
    /**
     * getDeploymentsForRepository - Find deployments
    **/
    getDeploymentsForRepository(req: operations.GetDeploymentsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentsForRepositoryResponse>;
    /**
     * getEnvironmentForRepository - Retrieve an environment
    **/
    getEnvironmentForRepository(req: operations.GetEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentForRepositoryResponse>;
    /**
     * getEnvironmentsForRepository - Find environments
    **/
    getEnvironmentsForRepository(req: operations.GetEnvironmentsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentsForRepositoryResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDeployKeys - Returns all deploy-keys belonging to a repository.
     *
     * Example:
     * ```
     * $ curl -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys
     *
     * Output:
     * {
     *     "pagelen": 10,
     *     "values": [
     *         {
     *             "id": 123,
     *             "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *             "label": "mykey",
     *             "type": "deploy_key",
     *             "created_on": "2018-08-15T23:50:59.993890+00:00",
     *             "repository": {
     *                 "full_name": "mleu/test",
     *                 "name": "test",
     *                 "type": "repository",
     *                 "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *             },
     *             "links":{
     *                 "self":{
     *                     "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
     *                 }
     *             }
     *             "last_used": null,
     *             "comment": "mleu@C02W454JHTD8"
     *         }
     *     ],
     *     "page": 1,
     *     "size": 1
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugDeployKeys(req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDeployKeysKeyId - Returns the deploy key belonging to a specific key.
     *
     * Example:
     * ```
     * $ curl -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234
     *
     * Output:
     * {
     *     "comment": "mleu@C02W454JHTD8",
     *     "last_used": null,
     *     "links": {
     *         "self": {
     *             "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
     *         }
     *     },
     *     "repository": {
     *         "full_name": "mleu/test",
     *         "name": "test",
     *         "type": "repository",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "label": "mykey",
     *     "created_on": "2018-08-15T23:50:59.993890+00:00",
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *     "id": 1234,
     *     "type": "deploy_key"
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugDeployKeys - Create a new deploy key in a repository. Note: If authenticating a deploy key
     * with an OAuth consumer, any changes to the OAuth consumer will subsequently
     * invalidate the deploy key.
     *
     *
     * Example:
     * ```
     * $ curl -XPOST \
     * -H "Authorization <auth header>" \
     * -H "Content-type: application/json" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
     * '{
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
     *     "label": "mydeploykey"
     * }'
     *
     * Output:
     * {
     *     "id": 123,
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *     "label": "mydeploykey",
     *     "type": "deploy_key",
     *     "created_on": "2018-08-15T23:50:59.993890+00:00",
     *     "repository": {
     *         "full_name": "mleu/test",
     *         "name": "test",
     *         "type": "repository",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "links":{
     *         "self":{
     *             "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
     *         }
     *     }
     *     "last_used": null,
     *     "comment": "mleu@C02W454JHTD8"
     * }
     * ```
    **/
    postRepositoriesWorkspaceRepoSlugDeployKeys(req: operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugDeployKeysKeyId - Create a new deploy key in a repository.
     *
     * The same key needs to be passed in but the comment and label can change.
     *
     * Example:
     * ```
     * $ curl -XPUT \
     * -H "Authorization <auth header>" \
     * -H "Content-type: application/json" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
     * '{
     *     "label": "newlabel",
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
     * }'
     *
     * Output:
     * {
     *     "comment": "newcomment",
     *     "last_used": null,
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
     *         }
     *     },
     *     "repository": {
     *         "full_name": "mleu/test",
     *         "name": "test",
     *         "type": "repository",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "label": "newlabel",
     *     "created_on": "2018-08-15T23:50:59.993890+00:00",
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *     "id": 1234,
     *     "type": "deploy_key"
     * }
     * ```
    **/
    putRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * updateEnvironmentForRepository - Update an environment
    **/
    updateEnvironmentForRepository(req: operations.UpdateEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentForRepositoryResponse>;
}

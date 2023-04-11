import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Teams are deploying code faster than ever, thanks to continuous
 *
 * @remarks
 * delivery practices and tools like Bitbucket Pipelines. Bitbucket
 * Deployments gives teams visibility into their deployment
 * environments and helps teams to track how far changes have
 * progressed in their deployment pipeline.
 *
 */
export declare class Deployments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an environment
     *
     * @remarks
     * Create an environment.
     */
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * Delete an environment
     *
     * @remarks
     * Delete an environment
     */
    deleteEnvironmentForRepository(req: operations.DeleteEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentForRepositoryResponse>;
    /**
     * Delete a repository deploy key
     *
     * @remarks
     * This deletes a deploy key from a repository.
     *
     * Example:
     * ```
     * $ curl -XDELETE \
     * -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
     * ```
     */
    deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, security: operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * Delete a deploy key from a project
     *
     * @remarks
     * This deletes a deploy key from a project.
     *
     * Example:
     * ```
     * $ curl -XDELETE \
     * -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/1234
     * ```
     */
    deleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId(req: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest, security: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse>;
    /**
     * Get a deployment
     *
     * @remarks
     * Retrieve a deployment
     */
    getDeploymentForRepository(req: operations.GetDeploymentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentForRepositoryResponse>;
    /**
     * List deployments
     *
     * @remarks
     * Find deployments
     */
    getDeploymentsForRepository(req: operations.GetDeploymentsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentsForRepositoryResponse>;
    /**
     * Get an environment
     *
     * @remarks
     * Retrieve an environment
     */
    getEnvironmentForRepository(req: operations.GetEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentForRepositoryResponse>;
    /**
     * List environments
     *
     * @remarks
     * Find environments
     */
    getEnvironmentsForRepository(req: operations.GetEnvironmentsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentsForRepositoryResponse>;
    /**
     * List repository deploy keys
     *
     * @remarks
     * Returns all deploy-keys belonging to a repository.
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
     */
    getRepositoriesWorkspaceRepoSlugDeployKeys(req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest, security: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse>;
    /**
     * Get a repository deploy key
     *
     * @remarks
     * Returns the deploy key belonging to a specific key.
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
     */
    getRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, security: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * List project deploy keys
     *
     * @remarks
     * Returns all deploy keys belonging to a project.
     *
     * Example:
     * ```
     * $ curl -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys
     *
     * Output:
     * {
     *     "pagelen":10,
     *     "values":[
     *         {
     *             "comment":"thakseth@C02W454JHTD8",
     *             "last_used":null,
     *             "links":{
     *                 "self":{
     *                     "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
     *                 }
     *             },
     *             "label":"test",
     *             "project":{
     *                 "links":{
     *                     "self":{
     *                         "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
     *                     }
     *                 },
     *                 "type":"project",
     *                 "name":"cooperative standard",
     *                 "key":"TEST_PROJECT",
     *                 "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
     *             },
     *             "created_on":"2021-07-28T21:20:19.491721+00:00",
     *             "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
     *             "type":"project_deploy_key",
     *             "id":1234
     *         }
     *     ],
     *     "page":1,
     *     "size":1
     * }
     * ```
     */
    getWorkspacesWorkspaceProjectsProjectKeyDeployKeys(req: operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest, security: operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysResponse>;
    /**
     * Get a project deploy key
     *
     * @remarks
     * Returns the deploy key belonging to a specific key ID.
     *
     * Example:
     * ```
     * $ curl -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234
     *
     * Output:
     * {
     *     "pagelen":10,
     *     "values":[
     *         {
     *             "comment":"thakseth@C02W454JHTD8",
     *             "last_used":null,
     *             "links":{
     *                 "self":{
     *                     "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/1234"
     *                 }
     *             },
     *             "label":"test",
     *             "project":{
     *                 "links":{
     *                     "self":{
     *                         "href":"https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT"
     *                     }
     *                 },
     *                 "type":"project",
     *                 "name":"cooperative standard",
     *                 "key":"TEST_PROJECT",
     *                 "uuid":"{3b3e510b-7f2b-414d-a2b7-76c4e405c1c0}"
     *             },
     *             "created_on":"2021-07-28T21:20:19.491721+00:00",
     *             "key":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDX5yfMOEw6HG9jKTYTisbmDTJ4MCUTSVGr5e4OWvY3UuI2A6F8SdzQqa2f5BABA/4g5Sk5awJrYHlNu3EzV1V2I44tR3A4fnZAG71ZKyDPi1wvdO7UYmFgxV/Vd18H9QZFFjICGDM7W0PT2mI0kON/jN3qNWi+GiB/xgaeQKSqynysdysDp8lnnI/8Sh3ikURP9UP83ShRCpAXszOUNaa+UUlcYQYBDLIGowsg51c4PCkC3DNhAMxppkNRKoSOWwyl+oRVXHSDylkiJSBHW3HH4Q6WHieD54kGrjbhWBKdnnxKX7QAAZBDseY+t01N36m6/ljvXSUEcBWtHxBYye0r",
     *             "type":"project_deploy_key",
     *             "id":1234
     *         }
     *     ],
     * }
     * ```
     */
    getWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyId(req: operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdRequest, security: operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyDeployKeysKeyIdResponse>;
    /**
     * Add a repository deploy key
     *
     * @remarks
     * Create a new deploy key in a repository. Note: If authenticating a deploy key
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
     */
    postRepositoriesWorkspaceRepoSlugDeployKeys(req: operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest, security: operations.PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse>;
    /**
     * Create a project deploy key
     *
     * @remarks
     * Create a new deploy key in a project.
     *
     * Example:
     * ```
     * $ curl -XPOST \
     * -H "Authorization <auth header>" \
     * -H "Content-type: application/json" \
     * https://api.bitbucket.org/2.0/workspaces/jzeng/projects/JZ/deploy-keys/ -d \
     * '{
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
     *     "label": "mydeploykey"
     * }'
     *
     * Output:
     * {
     *     "comment": "mleu@C02W454JHTD8",
     *     "last_used": null,
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/workspaces/testadfsa/projects/ASDF/deploy-keys/5/"
     *         }
     *     },
     *     "label": "myprojectkey",
     *     "project": {
     *         ...
     *     },
     *     "created_on": "2021-08-10T05:28:00.570859+00:00",
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *     "type": "project_deploy_key",
     *     "id": 5
     * }
     * ```
     */
    postWorkspacesWorkspaceProjectsProjectKeyDeployKeys(req: operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysRequest, security: operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysSecurity, config?: AxiosRequestConfig): Promise<operations.PostWorkspacesWorkspaceProjectsProjectKeyDeployKeysResponse>;
    /**
     * Update a repository deploy key
     *
     * @remarks
     * Create a new deploy key in a repository.
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
     */
    putRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, security: operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * Update an environment
     *
     * @remarks
     * Update an environment
     */
    updateEnvironmentForRepository(req: operations.UpdateEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentForRepositoryResponse>;
}

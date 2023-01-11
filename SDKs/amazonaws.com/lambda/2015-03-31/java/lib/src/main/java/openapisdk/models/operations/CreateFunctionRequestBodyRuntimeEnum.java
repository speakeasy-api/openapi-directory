package openapisdk.models.operations;


public enum CreateFunctionRequestBodyRuntimeEnum {
    NODEJS("nodejs"),
    NODEJS43("nodejs4.3"),
    NODEJS610("nodejs6.10"),
    NODEJS810("nodejs8.10"),
    NODEJS10_X("nodejs10.x"),
    NODEJS12_X("nodejs12.x"),
    NODEJS14_X("nodejs14.x"),
    JAVA8("java8"),
    JAVA8_AL2("java8.al2"),
    JAVA11("java11"),
    PYTHON27("python2.7"),
    PYTHON36("python3.6"),
    PYTHON37("python3.7"),
    PYTHON38("python3.8"),
    PYTHON39("python3.9"),
    DOTNETCORE10("dotnetcore1.0"),
    DOTNETCORE20("dotnetcore2.0"),
    DOTNETCORE21("dotnetcore2.1"),
    DOTNETCORE31("dotnetcore3.1"),
    NODEJS43_EDGE("nodejs4.3-edge"),
    GO1_X("go1.x"),
    RUBY25("ruby2.5"),
    RUBY27("ruby2.7"),
    PROVIDED("provided"),
    PROVIDED_AL2("provided.al2");

    public final String value;

    private CreateFunctionRequestBodyRuntimeEnum(String value) {
        this.value = value;
    }
}

package openapisdk.models.operations;


public enum ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum {
    ARCH_LINUX("Arch Linux"),
    CENT_OS("CentOS"),
    CORE_OS("CoreOS"),
    DEBIAN("Debian"),
    FEDORA("Fedora"),
    FEDORA_ATOMIC("Fedora Atomic"),
    FREE_BSD("FreeBSD"),
    GENTOO("Gentoo"),
    OPEN_SUSE("openSUSE"),
    RANCHER_OS("RancherOS"),
    UBUNTU("Ubuntu"),
    UNKNOWN("Unknown");

    public final String value;

    private ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum(String value) {
        this.value = value;
    }
}
